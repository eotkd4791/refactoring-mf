import { invoices } from "@/data/invoices";
import { plays } from "@/data/plays";
import { StatementRenderer } from "@/chap1/StatementRenderer";
import { render } from "@/utils/render";

function main() {
  const invoice = invoices[0];
  const statementRenderer = new StatementRenderer();
  const result1 = statementRenderer.renderStatement(invoice, plays);
  const result2 = statementRenderer.renderHtmlStatement(invoice, plays);
  render(result1 + "<br />".repeat(2) + "<hr />".repeat(2) + result2);
}

main();
