import type { EnrichedInvoice } from "@/chap1/types/Invoice";

export abstract class StatementGenerator {
  protected usd(aNumber: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(aNumber / 100);
  }

  abstract generate(invoice: EnrichedInvoice): string;
}
