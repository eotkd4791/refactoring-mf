import { EnrichedInvoice, EnrichedPerformance, Invoice, Performance } from "@/types/Invoice";
import { Play, Plays } from "@/types/play";

abstract class PerformanceCalculator {
  constructor(private readonly _performance: Performance, private readonly _play: Play) {}

  get performance() {
    return this._performance;
  }

  get play() {
    return this._play;
  }

  abstract get amount(): number;

  abstract get volumeCredits(): number;
}

function createPerformanceCalculator(aPerformance: Performance, aPlay: Play) {
  switch (aPlay.type) {
    case "tragedy":
      return new TragedyCalculator(aPerformance, aPlay);
    case "comedy":
      return new ComedyCalculator(aPerformance, aPlay);
  }
}

class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 40_000;
    if (this.performance.audience > 30) {
      result += 1_000 * (this.performance.audience - 30);
    }
    return result;
  }

  get volumeCredits() {
    return Math.max(this.performance.audience - 30, 0);
  }
}

class ComedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 30_000;
    if (this.performance.audience > 20) {
      result += 10_000 + 500 * (this.performance.audience - 20);
    }
    result += 300 * this.performance.audience;
    return result;
  }

  get volumeCredits() {
    return Math.max(this.performance.audience - 30, 0) + Math.floor(this.performance.audience / 5);
  }
}

export function createStatementData(invoice: Invoice, plays: Plays) {
  const result = {} as EnrichedInvoice;
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);
  return result;

  function enrichPerformance(aPerformance: Performance) {
    const calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance));
    const result = { ...aPerformance } as EnrichedPerformance;
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result;
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
