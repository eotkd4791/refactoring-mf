import { StatementGenerator } from "@/chap1/statementGenerator/StatementGenerator";
import { EnrichedInvoice } from "@/chap1/types/Invoice";

export class HTMLGenerator extends StatementGenerator {
  generate(data: EnrichedInvoice) {
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
}
