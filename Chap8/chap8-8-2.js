// 8.2 필드 옮기기

// e.g. 1

/**
 * Init
 */
class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._discountRate = discountRate;
    this._contract = new CustomerContract(dateToday());
  }

  get discountRate() { return this._discountRate; }
  becomePreffered() {
    this._discountRate += 0.03;
  }
  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this._discountRate));
  }
}

class CustomerContract {
  constructor(startDate) {
    this._startDate = startDate;
  }

  get startDate() { return this._startDate; }
}

/**
 * Refactoring
 */

// #1
class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._setDiscountRate(discountRate);
    this._contract = new CustomerContract(dateToday());
  }

  get discountRate() { return this._discountRate; }
  _setDiscountRate(aNumber) { this._discountRate = aNumber; }

  becomePreffered() {
    this._setDiscountRate(this.discountRate + 0.03);
  }
  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.discountRate));
  }
}

class CustomerContract {
  constructor(startDate, discountRate) {
    this._startDate = startDate;
    this._discountRate = discountRate;
  }

  get startDate() { return this._startDate; }
  set discountRate(arg) { this._discountRate = arg; }
}

// #2
class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._contract = new CustomerContract(dateToday());
    this._setDiscountRate(discountRate);
  }

  get discountRate() { return this._contract.discountRate; }

  _setDiscountRate(aNumber) { this._contract.discountRate = aNumber; }
  becomePreffered() { this._setDiscountRate(this.discountRate + 0.03); }
  applyDiscount(amount) { return amount.subtract(amount.multiply(this.discountRate)); }
}

class CustomerContract {
  constructor(startDate, discountRate) {
    this._startDate = startDate;
    this._discountRate = discountRate;
  }

  get startDate() { return this._startDate; }
  set discountRate(arg) { this._discountRate = arg; }
}

// e.g. 2


/**
 * Init
 */
class Account {
  constructor(number, type, interestRate) {
    this._number = number;
    this._type = type;
    this._interestRate = interestRate;
  }

  get interestRate() { return this._interestRate; }
}

class AccountType {
  constructor(nameString) {
    this._name = nameString;
  }
}


/**
 * Refactoring
 */

// #1
class AccountType {
  constructor(nameString, interestRate) {
    this._name = nameString;
    this._interestRate = interestRate;
  }

  get interestRate() { return this._interestRate; }
}

// #2
class Account {
  constructor(number, type, interestRate) {
    this._number = number;
    this._type = type;
    assert(interestRate === this._type.interestRate);
    this._interestRate = interestRate;
  }

  get interestRate() { this._interestRate; }
}