import { fetchData } from './utils.js';
import { statement } from './bill.js';

async function init() {
  try {
    const [invoice] = await fetchData('./invoices.json');
    const plays = await fetchData('./plays.json');
    document.getElementById('app').innerHTML = statement(invoice, plays);

  } catch (error) {
    console.error(error);
  }
}
init();