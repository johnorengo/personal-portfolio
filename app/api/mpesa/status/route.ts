import {
  getDarajaAccessToken,
  getDarajaBaseUrl,
  getMpesaConfig,
  getMpesaPassword,
  getMpesaTimestamp,
  isSameOriginRequest,
} from "../../../../lib/mpesa-server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!isSameOriginRequest(request)) {
    return Response.json({ error: "Invalid request origin." }, { status: 403 });
  }

  const config = getMpesaConfig();
  if (!config) {
    return Response.json({ error: "M-Pesa payments are not configured yet." }, { status: 503 });
  }

  const body = await request.json().catch(() => null) as { checkoutRequestId?: unknown } | null;
  const checkoutRequestId = body?.checkoutRequestId;
  if (typeof checkoutRequestId !== "string" || !/^ws_CO_[\w-]{8,80}$/.test(checkoutRequestId)) {
    return Response.json({ error: "Invalid payment reference." }, { status: 400 });
  }

  try {
    const accessToken = await getDarajaAccessToken(config);
    const timestamp = getMpesaTimestamp();
    const response = await fetch(`${getDarajaBaseUrl(config.environment)}/mpesa/stkpushquery/v1/query`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        BusinessShortCode: config.shortcode,
        Password: getMpesaPassword(config, timestamp),
        Timestamp: timestamp,
        CheckoutRequestID: checkoutRequestId,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });

    const result = await response.json().catch(() => null) as {
      ResultCode?: string | number;
      ResultDesc?: string;
      errorCode?: string;
      errorMessage?: string;
    } | null;

    if (String(result?.ResultCode) === "0") {
      return Response.json({ status: "complete" });
    }
    if (result?.ResultCode !== undefined && result?.ResultCode !== null) {
      return Response.json({ status: "failed", message: "The M-Pesa payment was not completed. You can try again." });
    }
    if (!response.ok && !result?.errorCode?.startsWith("500.")) {
      return Response.json({ error: "Safaricom could not check the payment status. Please try again." }, { status: 502 });
    }

    return Response.json({ status: "pending" });
  } catch {
    return Response.json({ error: "Could not check the payment status. Please try again." }, { status: 502 });
  }
}
