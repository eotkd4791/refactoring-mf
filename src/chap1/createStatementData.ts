import { EnrichedInvoice, EnrichedPerformance, Invoice, Performance } from "@/types/Invoice";
import { Plays } from "@/types/play";

export function createStatementData(invoice: Invoice, plays: Plays) {
	const statementData = {} as EnrichedInvoice;
	statementData.customer = invoice.customer;
	statementData.performances = invoice.performances.map(enrichPerformance);
	statementData.totalAmount = totalAmount(statementData);
	statementData.totalVolumeCredits = totalVolumeCredits(statementData);
	return statementData;

	function totalAmount(data: EnrichedInvoice) {
		return data.performances.reduce((total, p) => total + p.amount, 0);
	}

	function totalVolumeCredits(data: EnrichedInvoice) {
		return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
	}

	function enrichPerformance(aPerformance: Performance) {
		const result = { ...aPerformance } as EnrichedPerformance;
		result.play = playFor(result);
		result.amount = amountFor(result);
		result.volumeCredits = volumeCreditsFor(result);
		return result;
	}

	function playFor(aPerformance: Performance) {
		return plays[aPerformance.playID];
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

	function volumeCreditsFor(aPerformance: EnrichedPerformance) {
		let result = 0;
		result += Math.max(aPerformance.audience - 30, 0);
		if ("comedy" === aPerformance.play.type) {
			result += Math.floor(aPerformance.audience / 5);
		}
		return result;
	}
}
