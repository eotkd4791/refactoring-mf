// 7.5 클래스 추출하기 

/**
 * Init
 */
class Person {
  constructor() {}
  get name() { return this._name; }
  set name(arg) { this._name = arg; }
  get telephoneNumber() { return `${this.officeAreaCode} ${this.officeNumber}`; }
  get officeAreaCode() { return this._officeAreaCode; }
  set officeAreaCode(arg) { this._officeAreaCode = arg; }
  get officeNumber() { return this._officeNumber; }
  set officeNumber(arg) { this._officeNumber; }
}

/**
 * Refactoring
 */

// #1
class TelephoneNumber {
  get officeAreaCode() { return this._officeAreaCode; }
  set officeAreaCode(arg) { this._officeAreaCode = arg; }
}

class Person {
  constructor() {
    this._telephoneNumber = new TelephoneNumber();
  }
  get name() { return this._name; }
  set name(arg) { this._name = arg; }
  get telephoneNumber() { return `${this.officeAreaCode} ${this.officeNumber}`; }
  
  get officeNumber() { return this._officeNumber; }
  set officeNumber(arg) { this._officeNumber = arg; }
}

// #2
class TelephoneNumber {
  get telephoneNumber() { return `${this.officeAreaCode} ${this.officeNumber}`; }
  get officeAreaCode() { return this._officeAreaCode; }
  set officeAreaCode(arg) { this._officeAreaCode = arg; }
  get officeNumber() { return this._officeNumber; }
  set officeNumber(arg) { this._officeNumber = arg; }
}

class Person {
  constructor() {
    this._telephoneNumber = new TelephoneNumber();
  }
  get name() { return this._name; }
  set name(arg) { this._name = arg; }
  get telephoneNumber() { return this._telephoneNumber.telephoneNumber; }
  get officeAreaCode() { return this._telephoneNumber.officeAreaCode; }
  set officeAreaCode(arg) { this._telephoneNumber.officeAreaCode = arg; } 
  get officeNumber() { return this._telephoneNumber.officeNumber; }
  set officeNumber(arg) { this._telephoneNumber.officeNumber = arg; }
}


// #3
class TelephoneNumber {
  toSting() { return `${this.areaCode} ${this.number}`; }
  get areaCode() { return this._areaCode; }
  set areaCode(arg) { this._areaCode = arg; }
  get number() { return this._number; }
  set number(arg) { this._number = arg; }
}

class Person {
  constructor() {
    this._telephoneNumber = new TelephoneNumber();
  }
  get name() { return this._name; }
  set name(arg) { this._name = arg; }
  get telephoneNumber() { return this._telephoneNumber.toString(); }
  get officeAreaCode() { return this._telephoneNumber.areaCode; }
  set officeAreaCode(arg) { this._telephoneNumber.areaCode = arg; } 
  get officeNumber() { return this._telephoneNumber.number; }
  set officeNumber(arg) { this._telephoneNumber.number = arg; }
}
