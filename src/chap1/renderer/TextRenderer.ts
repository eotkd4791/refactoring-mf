import { Renderer } from "@/chap1/renderer/Renderer";
import { EnrichedInvoice } from "@/types/Invoice";

export class TextRenderer extends Renderer {
  render(data: EnrichedInvoice) {
    let result = `청구 내역 (고객명: ${data.customer})\n`;

    for (const perf of data.performances) {
      result += `${perf.play.name}: ${this.usd(perf.amount)} (${perf.audience}석)\n`;
    }

    result += `총액 ${this.usd(data.totalAmount)}\n`;
    result += `적립 포인트: ${data.totalVolumeCredits} 점\n`;
    return result;
  }
}
