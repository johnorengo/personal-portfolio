import { Buffer } from "node:buffer";

export type MpesaEnvironment = "sandbox" | "production";

export interface MpesaConfig {
  consumerKey: string;
  consumerSecret: string;
  shortcode: string;
  passkey: string;
  callbackUrl: string;
  environment: MpesaEnvironment;
  transactionType: "CustomerPayBillOnline" | "CustomerBuyGoodsOnline";
  partyB: string;
}

export function getMpesaConfig(): MpesaConfig | null {
  const consumerKey = process.env.MPESA_CONSUMER_KEY?.trim();
  const consumerSecret = process.env.MPESA_CONSUMER_SECRET?.trim();
  const shortcode = process.env.MPESA_BUSINESS_SHORTCODE?.trim();
  const passkey = process.env.MPESA_PASSKEY?.trim();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const callbackUrl = process.env.MPESA_CALLBACK_URL?.trim() || (siteUrl ? `${siteUrl.replace(/\/$/, "")}/api/mpesa/callback` : "");

  if (!consumerKey || !consumerSecret || !shortcode || !passkey || !callbackUrl) return null;

  let parsedCallback: URL;
  try {
    parsedCallback = new URL(callbackUrl);
  } catch {
    return null;
  }

  if (parsedCallback.protocol !== "https:") return null;

  const environment = process.env.MPESA_ENVIRONMENT === "production" ? "production" : "sandbox";
  const transactionType = process.env.MPESA_TRANSACTION_TYPE === "CustomerBuyGoodsOnline"
    ? "CustomerBuyGoodsOnline"
    : "CustomerPayBillOnline";

  return {
    consumerKey,
    consumerSecret,
    shortcode,
    passkey,
    callbackUrl: parsedCallback.toString(),
    environment,
    transactionType,
    partyB: process.env.MPESA_PARTY_B?.trim() || shortcode,
  };
}

export function getDarajaBaseUrl(environment: MpesaEnvironment) {
  return environment === "production"
    ? "https://api.safaricom.co.ke"
    : "https://sandbox.safaricom.co.ke";
}

export function getMpesaTimestamp() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Nairobi",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return `${values.year}${values.month}${values.day}${values.hour}${values.minute}${values.second}`;
}

export function getMpesaPassword(config: MpesaConfig, timestamp: string) {
  return Buffer.from(`${config.shortcode}${config.passkey}${timestamp}`).toString("base64");
}

export async function getDarajaAccessToken(config: MpesaConfig) {
  const credentials = Buffer.from(`${config.consumerKey}:${config.consumerSecret}`).toString("base64");
  const response = await fetch(`${getDarajaBaseUrl(config.environment)}/oauth/v1/generate?grant_type=client_credentials`, {
    headers: { Authorization: `Basic ${credentials}` },
    cache: "no-store",
  });

  const result = await response.json().catch(() => null) as { access_token?: string } | null;
  if (!response.ok || !result?.access_token) {
    throw new Error("Safaricom authorization failed. Check the Daraja credentials and environment.");
  }

  return result.access_token;
}

export function isSameOriginRequest(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;

  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}
