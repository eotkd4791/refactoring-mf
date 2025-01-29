import type { Play } from "@/chap1/types/play";
import type { Performance } from "@/chap1/types/Invoice";

export abstract class PerformanceCalculator {
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
