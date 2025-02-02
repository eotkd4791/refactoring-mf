import { invoices } from "@/chap1/data/invoices";
import { plays } from "@/chap1/data/plays";
import { StatementData } from "@/chap1/StatementData";
import { render } from "@/chap1/utils/render";
import { StatementGenerator } from "@/chap1/statementGenerator/StatementGenerator";
import { HTMLGenerator } from "@/chap1/statementGenerator/HTMLGenerator";
// import { TextGenerator } from "@/chap1/generator/TextGenerator";

function main() {
  const invoice = invoices[0];
  const statementData = new StatementData(invoice, plays).create();
  const statementGenerator: StatementGenerator = new HTMLGenerator();
  const statement = statementGenerator.generate(statementData);
  render(statement);
}

main();
