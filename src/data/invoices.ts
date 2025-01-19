import type { Invoice } from "@/types/Invoice";

export const invoices: Invoice[] = [
	{
		customer: "BigCo",
		performances: [
			{
				playID: "hamlet",
				audience: 55,
			},
			{
				playID: "as-like",
				audience: 35,
			},
			{
				playID: "othello",
				audience: 40,
			},
		],
	},
];
