export interface QuoteRequestPayload {
  name: string;
  phone: string;
  zip: string;
  serviceType: string;
  description: string;
  photo: File | null;
}

// Stubbed submit handler, no backend yet. Swap the body for a real API
// call when the submission endpoint exists; the signature stays the same.
export async function submitQuoteRequest(
  payload: QuoteRequestPayload
): Promise<{ success: boolean }> {
  await new Promise((resolve) => setTimeout(resolve, 600));
  console.log("Quote request submitted:", payload);
  return { success: true };
}
