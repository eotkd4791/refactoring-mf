import { invoices } from "@/data/invoices";
import { plays } from "@/data/plays";
import { statement, htmlStatement } from "@/chap1/statement";
import { render } from "@/utils/render";

function main() {
  const invoice = invoices[0];
  const result1 = statement(invoice, plays);
  const result2 = htmlStatement(invoice, plays);
  render(result1 + "<br />".repeat(2) + "<hr />".repeat(2) + result2);
}

main();
