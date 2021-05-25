
class Account {
	constructor() {
  	this._value = 0;
	}
  
	investBTC(amount) {
		this._value += this.calculateValue(amount, 1);
	}
  
  investStock(amount) {
  	this._value += this.calculateValue(amount, 0.1);
  }

  calculateValue(amount, rate) {
    return amount * (Math.random()*2 - 1) * rate;
  }
  
  get value() {return this._value;}
}

function testFunction(account) {
	account.investBTC(100);
  account.investStock(50);
  return account.value;
}

// 이하 수정 금지
Math.random = ()=>{return 0.5;}
let account = new Account();
console.log(testFunction(account));


