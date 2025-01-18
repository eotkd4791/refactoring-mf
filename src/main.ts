import { invoices } from "@/data/invoices";
import { plays } from "@/data/plays";
import { statement } from "@/statement";
import { render } from "@/utils/render";

function main() {
	const invoice = invoices[0];
	const result = statement(invoice, plays);
	render(result);
}

main();
