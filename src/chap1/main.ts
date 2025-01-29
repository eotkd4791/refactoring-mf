import { invoices } from "@/chap1/data/invoices";
import { plays } from "@/chap1/data/plays";
import { render } from "@/chap1/utils/render";
import { HTMLRenderer } from "@/chap1/renderer/HTMLRenderer";
import { StatementData } from "@/chap1/StatementData";
import { Renderer } from "@/chap1/renderer/Renderer";
// import { TextRenderer } from "@/chap1/renderer/TextRenderer";

function main() {
  const invoice = invoices[0];
  const statementData = new StatementData(invoice, plays).create();
  const renderer: Renderer = new HTMLRenderer();
  const statement = renderer.render(statementData);
  render(statement);
}

main();
