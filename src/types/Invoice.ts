import type { Overwrite } from "@/types/libs";
import { Play } from "@/types/play";

export type Invoice = {
  customer: string;
  performances: Performance[];
};

export type Performance = {
  playID: string;
  audience: number;
};

export type EnrichedPerformance = Overwrite<Performance, { play: Play; amount: number; volumeCredits: number }>;

export type EnrichedInvoice = Overwrite<
  Invoice,
  { performances: EnrichedPerformance[]; totalAmount: number; totalVolumeCredits: number }
>;
