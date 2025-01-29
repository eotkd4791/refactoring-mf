import type { Play } from "@/chap1/types/play";
import type { Performance } from "@/chap1/types/Invoice";
import { TragedyCalculator } from "@/chap1/performanceCalculator/TragedyCalculator";
import { ComedyCalculator } from "@/chap1/performanceCalculator/ComedyCalculator";

export class PerformanceCalculatorFactory {
  static create(aPerformance: Performance, aPlay: Play) {
    switch (aPlay.type) {
      case "tragedy":
        return new TragedyCalculator(aPerformance, aPlay);
      case "comedy":
        return new ComedyCalculator(aPerformance, aPlay);
    }
  }
}
