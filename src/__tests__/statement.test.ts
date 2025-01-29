import { describe, expect, test } from "vitest";
import { StatementRenderer } from "@/chap1/StatementRenderer";
import { invoices } from "@/data/invoices.ts";
import { plays } from "@/data/plays.ts";

describe("statement 함수", () => {
  test("statement 초기 상태", () => {
    const invoice = invoices[0];
    const statementRenderer = new StatementRenderer();
    const result = statementRenderer.renderStatement(invoice, plays);

    const expectedResult = [
      "청구 내역 (고객명: BigCo)",
      "Hamlet: $650.00 (55석)",
      "As You Like It: $580.00 (35석)",
      "Othello: $500.00 (40석)",
      "총액 $1,730.00",
      "적립 포인트: 47 점",
      "",
    ].join("\n");

    expect(result).toBe(expectedResult);
  });

  test("htmlStatement 반환값", () => {
    const invoice = invoices[0];
    const statementRenderer = new StatementRenderer();
    const result = statementRenderer.renderHtmlStatement(invoice, plays);

    expect(result).toMatchInlineSnapshot(
      `
      "<h1>청구 내역 (고객명: BigCo)</h1>
      <table>
      <tr><th>연극</th><th>좌석수</th><th>금액</th></tr>  <tr><td>Hamlet</td><td>(55 석)</td><td>$650.00</td></tr>
        <tr><td>As You Like It</td><td>(35 석)</td><td>$580.00</td></tr>
        <tr><td>Othello</td><td>(40 석)</td><td>$500.00</td></tr>
      </table>
      <p>총액: <em>$1,730.00</em></p>
      <p>적립 포인트: <em>47</em>점</p>
      "
    `,
    );
  });
});
