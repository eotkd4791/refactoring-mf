// 6.9 여러 함수를 클래스로 묶기

function acquireReading() {
  return  { 
    customer: 'ivan',
    quantity: 10,
    month: 5,
    year: 2017
  };
}
function baseRate(month, year){}


// # init

// client 1
const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;


// client 2
const aReading = acquireReading();
const base = (baseRate(aReading.month, aReading.yaer) * aReading.quantity);
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

// client 3
const aReading = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading);

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}


/**
 *  Refactoring
 */

// #1
class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }
  get customer() { return this._customer; }
  get quantity() { return this._quantity; }
  get month() { return this._month; }
  get year() { return this._year; }

  get calculateBaseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }
}

// client 3
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = calculateBaseCharge(aReading);

// #2
class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }
  get customer() { return this._customer; }
  get quantity() { return this._quantity; }
  get month() { return this._month; }
  get year() { return this._year; }

  get calculateBaseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }
}

// client 3
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = aReading.calculateBaseCharge;


// #3
class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }
  get customer() { return this._customer; }
  get quantity() { return this._quantity; }
  get month() { return this._month; }
  get year() { return this._year; }

  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }
}

// client 3
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = aReading.baseCharge;

// client 1
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const baseCharge = aReading.baseCharge;

// client 2
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const taxableCharge = Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));


// #4
function taxableChargeFn(aReading) {
  return Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));
}

// client 2
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const taxableCharge = taxableChargeFn(aReading);


// #5
class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }
  get customer() { return this._customer; }
  get quantity() { return this._quantity; }
  get month() { return this._month; }
  get year() { return this._year; }

  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }

  get taxableCharge() {
    return Math.max(0, this.baseCharge - taxThreshold(this.year));
  }
}

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const taxableAmount = aReading.taxableCharge;