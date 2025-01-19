import type { Performance, Invoice } from "@/types/Invoice";
import { Overwrite } from "@/types/libs";
import type { Play, Plays } from "@/types/play";

type EnrichedPerformance = Overwrite<Performance, { play: Play }>;
type EnrichedInvoice = Overwrite<Invoice, { performances: EnrichedPerformance[] }>;

export function statement(invoice: Invoice, plays: Plays) {
	const statementData = {} as EnrichedInvoice;
	statementData.customer = invoice.customer;
	statementData.performances = invoice.performances.map(enrichPerformance);
	return renderPlainText(statementData);

	function enrichPerformance(aPerformance: Performance) {
		const result = { ...aPerformance } as EnrichedPerformance;
		result.play = playFor(result);
		return result;
	}

	function playFor(aPerformance: Performance) {
		return plays[aPerformance.playID];
	}
}

function renderPlainText(data: EnrichedInvoice) {
	let result = `청구 내역 (고객명: ${data.customer})\n`;

	for (let perf of data.performances) {
		result += `${perf.play.name}: ${usd(amountFor(perf))} (${perf.audience}석)\n`;
	}

	result += `총액 ${usd(totalAmount())}\n`;
	result += `적립 포인트: ${totalVolumeCredits()} 점\n`;
	return result;

	function totalAmount() {
		let result = 0;
		for (let perf of data.performances) {
			result += amountFor(perf);
		}
		return result;
	}

	function totalVolumeCredits() {
		let volumeCredits = 0;
		for (let perf of data.performances) {
			volumeCredits += volumeCreditsFor(perf);
		}
		return volumeCredits;
	}

	function volumeCreditsFor(aPerformance: EnrichedPerformance) {
		let result = 0;
		result += Math.max(aPerformance.audience - 30, 0);
		if ("comedy" === aPerformance.play.type) {
			result += Math.floor(aPerformance.audience / 5);
		}
		return result;
	}

	function usd(aNumber: number) {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			minimumFractionDigits: 2,
		}).format(aNumber / 100);
	}

	function amountFor(aPerformance: EnrichedPerformance) {
		let result = 0;

		switch (aPerformance.play.type) {
			case "tragedy":
				result = 40000;
				if (aPerformance.audience > 30) {
					result += 1000 * (aPerformance.audience - 30);
				}
				break;
			case "comedy":
				result = 30000;
				if (aPerformance.audience > 20) {
					result += 10000 + 500 * (aPerformance.audience - 20);
				}
				result += 300 * aPerformance.audience;
				break;
			default:
				throw new Error(`알 수 없는 장르: ${aPerformance.play.type}`);
		}
		return result;
	}
}
