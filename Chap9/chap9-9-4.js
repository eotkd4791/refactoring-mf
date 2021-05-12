// 9.4 참조를 값으로 바꾸기

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

// 클래스 추출하기 진행중

class TelephoneNumber {
  get telephoneNumber() { return `${this.officeAreaCode} ${this.officeNumber}`; }
  get officeAreaCode() { return this._officeAreaCode; }
  set officeAreaCode(arg) { this._officeAreaCode = arg; }
  get officeNumber() { return this._officeNumber; }
  set officeNumber(arg) { this._officeNumber = arg; }
}

/**
 * Refactoring
 */

// #1 세터 제거 후, 생성자 함수에서 값을 할당하여 불변값으로 만든다.
class TelephoneNumber {
  constructor(areaCode, number) {
    this._areaCode = areaCode;
    this._number = number;
  }
  get telephoneNumber() { return `${this.officeAreaCode} ${this.officeNumber}`; }
  get officeAreaCode() { return this._officeAreaCode; }
  get officeNumber() { return this._officeNumber; }
}

class Person {
  constructor() {}
  get name() { return this._name; }
  set name(arg) { this._name = arg; }
  get telephoneNumber() { return `${this.officeAreaCode} ${this.officeNumber}`; }
  get officeAreaCode() { return this._officeAreaCode; }
  set officeAreaCode(arg) { 
    this._telephoneNumber = new TelephoneNumber(arg, this.officeNumber); 
  }
  get officeNumber() { return this._officeNumber; }
  set officeNumber(arg) { this._officeNumber = new TelephoneNumber(this.officeAreaCode, arg); }
}

// #2 equals 함수 구현
class TelephoneNumber {
  constructor(areaCode, number) {
    this._areaCode = areaCode;
    this._number = number;
  }
  get telephoneNumber() { return `${this.officeAreaCode} ${this.officeNumber}`; }
  get officeAreaCode() { return this._officeAreaCode; }
  get officeNumber() { return this._officeNumber; }

  equals(other) {
    if(!(other instanceof TelephoneNumber)) return false;
    return this.areaCode === other.areaCode && 
           this.number === other.number;
  }
}