import type { EnrichedInvoice } from "@/chap1/types/Invoice";

export abstract class Renderer {
  protected usd(aNumber: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(aNumber / 100);
  }

  abstract render(invoice: EnrichedInvoice): string;
}
