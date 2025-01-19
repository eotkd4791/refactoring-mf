import type { EnrichedInvoice, EnrichedPerformance, Invoice, Performance } from "@/types/Invoice";
import type { Plays } from "@/types/play";
import { createPerformanceCalculator } from "@/chap1/performanceCalculator/performanceCalculatorFactory";

export function createStatementData(invoice: Invoice, plays: Plays) {
  const result = {} as EnrichedInvoice;
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);
  return result;

  function enrichPerformance(aPerformance: Performance): EnrichedPerformance {
    const calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance));
    return {
      ...aPerformance,
      play: calculator.play,
      amount: calculator.amount,
      volumeCredits: calculator.volumeCredits,
    };
  }

  function playFor(aPerformance: Performance) {
    return plays[aPerformance.playID];
  }

  function totalAmount(data: EnrichedInvoice) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }

  function totalVolumeCredits(data: EnrichedInvoice) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }
}
