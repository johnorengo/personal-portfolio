import {
  getDarajaAccessToken,
  getDarajaBaseUrl,
  getMpesaConfig,
  getMpesaPassword,
  getMpesaTimestamp,
  isSameOriginRequest,
} from "../../../../lib/mpesa-server";

export const runtime = "nodejs";

function normalizePhone(value: unknown) {
  if (typeof value !== "string") return null;
  const digits = value.replace(/\D/g, "");
  const local = digits.startsWith("254") ? digits.slice(3) : digits.startsWith("0") ? digits.slice(1) : digits;
  return /^[17]\d{8}$/.test(local) ? `254${local}` : null;
}

export async function POST(request: Request) {
  if (!isSameOriginRequest(request)) {
    return Response.json({ error: "Invalid request origin." }, { status: 403 });
  }

  const config = getMpesaConfig();
  if (!config) {
    return Response.json({ error: "M-Pesa payments are not configured yet." }, { status: 503 });
  }

  const body = await request.json().catch(() => null) as { amount?: unknown; phone?: unknown } | null;
  const amount = typeof body?.amount === "number" ? body.amount : Number.NaN;
  const phone = normalizePhone(body?.phone);

  if (!Number.isSafeInteger(amount) || amount < 1 || amount > 250000) {
    return Response.json({ error: "Enter a whole amount from KES 1 to KES 250,000." }, { status: 400 });
  }
  if (!phone) {
    return Response.json({ error: "Enter a valid Kenyan mobile number, such as 0712 345 678." }, { status: 400 });
  }

  try {
    const accessToken = await getDarajaAccessToken(config);
    const timestamp = getMpesaTimestamp();
    const response = await fetch(`${getDarajaBaseUrl(config.environment)}/mpesa/stkpush/v1/processrequest`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        BusinessShortCode: config.shortcode,
        Password: getMpesaPassword(config, timestamp),
        Timestamp: timestamp,
        TransactionType: config.transactionType,
        Amount: amount,
        PartyA: phone,
        PartyB: config.partyB,
        PhoneNumber: phone,
        CallBackURL: config.callbackUrl,
        AccountReference: "JOHNSODA",
        TransactionDesc: "Soda support",
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });

    const result = await response.json().catch(() => null) as {
      ResponseCode?: string;
      ResponseDescription?: string;
      CustomerMessage?: string;
      CheckoutRequestID?: string;
    } | null;

    if (!response.ok || result?.ResponseCode !== "0" || !result.CheckoutRequestID) {
      return Response.json({ error: result?.ResponseDescription || "Safaricom could not start the payment prompt. Please try again." }, { status: 502 });
    }

    return Response.json({ checkoutRequestId: result.CheckoutRequestID, phone, message: result.CustomerMessage });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not connect to Safaricom.";
    return Response.json({ error: message }, { status: 502 });
  }
}
