import type { Invoice, EnrichedInvoice } from "@/types/Invoice";
import type { Plays } from "@/types/play";
import { createStatementData } from "@/chap1/createStatementData";

export class StatementRenderer {
  renderStatement(invoice: Invoice, plays: Plays) {
    return this.renderPlainText(createStatementData(invoice, plays));
  }

  renderHtmlStatement(invoice: Invoice, plays: Plays) {
    return this.renderHtml(createStatementData(invoice, plays));
  }

  private renderPlainText(data: EnrichedInvoice) {
    let result = `청구 내역 (고객명: ${data.customer})\n`;

    for (const perf of data.performances) {
      result += `${perf.play.name}: ${this.usd(perf.amount)} (${perf.audience}석)\n`;
    }

    result += `총액 ${this.usd(data.totalAmount)}\n`;
    result += `적립 포인트: ${data.totalVolumeCredits} 점\n`;
    return result;
  }

  private renderHtml(data: EnrichedInvoice) {
    let result = `<h1>청구 내역 (고객명: ${data.customer})</h1>\n`;
    result += "<table>\n";
    result += "<tr><th>연극</th><th>좌석수</th><th>금액</th></tr>";
    for (const perf of data.performances) {
      result += `  <tr><td>${perf.play.name}</td><td>(${perf.audience} 석)</td>`;
      result += `<td>${this.usd(perf.amount)}</td></tr>\n`;
    }
    result += "</table>\n";
    result += `<p>총액: <em>${this.usd(data.totalAmount)}</em></p>\n`;
    result += `<p>적립 포인트: <em>${data.totalVolumeCredits}</em>점</p>\n`;
    return result;
  }

  private usd(aNumber: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(aNumber / 100);
  }
}
