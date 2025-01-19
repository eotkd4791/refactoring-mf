import { PerformanceCalculator } from "@/chap1/performanceCalculator/PerformanceCalculator";

export class TragedyCalculator extends PerformanceCalculator {
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
