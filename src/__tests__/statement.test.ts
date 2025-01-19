import { describe, expect, test } from "vitest";
import { statement } from "@/chap1/statement";
import { invoices } from "@/data/invoices.ts";
import { plays } from "@/data/plays.ts";

describe("statement 함수", () => {
  test("statement 초기 상태", () => {
    const invoice = invoices[0];
    const result = statement(invoice, plays);

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

  test("statement 스냅샷", () => {
    const invoice = invoices[0];
    const result = statement(invoice, plays);

    expect(result).toMatchInlineSnapshot(
      `
			"청구 내역 (고객명: BigCo)
			Hamlet: $650.00 (55석)
			As You Like It: $580.00 (35석)
			Othello: $500.00 (40석)
			총액 $1,730.00
			적립 포인트: 47 점
			"
		`,
    );
  });
});
