import type { EnrichedInvoice, EnrichedPerformance, Invoice, Performance } from "@/chap1/types/Invoice";
import type { Plays } from "@/chap1/types/play";
import { PerformanceCalculatorFactory } from "@/chap1/performanceCalculator/PerformanceCalculatorFactory";

export class StatementData {
  constructor(private readonly invoice: Invoice, private readonly plays: Plays) {}

  create() {
    const result = {} as EnrichedInvoice;
    result.customer = this.invoice.customer;
    result.performances = this.invoice.performances.map((aPerformance) => this.enrichPerformance(aPerformance));
    result.totalAmount = this.totalAmount(result);
    result.totalVolumeCredits = this.totalVolumeCredits(result);
    return result;
  }

  private enrichPerformance(aPerformance: Performance): EnrichedPerformance {
    const calculator = PerformanceCalculatorFactory.create(aPerformance, this.playFor(aPerformance));
    return {
      ...aPerformance,
      play: calculator.play,
      amount: calculator.amount,
      volumeCredits: calculator.volumeCredits,
    };
  }

  private playFor(aPerformance: Performance) {
    return this.plays[aPerformance.playID];
  }

  private totalAmount({ performances }: EnrichedInvoice) {
    return performances.reduce((total, p) => total + p.amount, 0);
  }

  private totalVolumeCredits({ performances }: EnrichedInvoice) {
    return performances.reduce((total, p) => total + p.volumeCredits, 0);
  }
}
