/**
 * Daraja requires a public callback URL. The coffee modal verifies the
 * CheckoutRequestID against Safaricom with STK Push Query, so this endpoint
 * acknowledges callbacks without treating an unverified payload as payment.
 */
export async function POST() {
  return Response.json({ ResultCode: 0, ResultDesc: "Accepted" });
}
