import { invoices } from "@/data/invoices";
import { plays } from "@/data/plays";
import { render } from "@/utils/render";
import { HTMLRenderer } from "@/chap1/renderer/HtmlRenderer";
import { StatementData } from "@/chap1/StatementData";
import { Renderer } from "./chap1/renderer/Renderer";
// import { TextRenderer } from "@/chap1/renderer/TextRenderer";

function main() {
  const invoice = invoices[0];
  const statementData = new StatementData(invoice, plays).create();
  const renderer: Renderer = new HTMLRenderer();
  const statement = renderer.render(statementData);
  render(statement);
}

main();
