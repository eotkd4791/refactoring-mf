import { PerformanceCalculator } from "@/chap1/performanceCalculator/PerformanceCalculator";

export class ComedyCalculator extends PerformanceCalculator {
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
