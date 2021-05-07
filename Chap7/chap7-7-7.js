// 7.7 위임 숨기기

/**
 * Init
 */
 class Person {
  constructor(name) {
    this.name = name;
    this.department = new Department();
  }
  get name() { return this._name; }
  get department() { return this._department; }
  set department(arg) { this._department = arg; }
}

class Department {
  get chargeCode() { return this._chargeCode; }
  set chargeCode(arg) { this._chargeCode = arg; }
  get manager() { return this._manager; }
  set manager(arg) { this._manager = arg; }
}

const aPerson = new Person('daesang');
const manager = aPerson.department.manager;

/**
 * Refactoring
 */

class Person {
  constructor(name) {
    this.name = name;
    this.department = new Department();
  }
  get name() { return this._name; }
  get department() { return this._department; }
  set department(arg) { this._department = arg; }
  get manager() { return this._departmant.manager; }
}

class Department {
  get chargeCode() { return this._chargeCode; }
  set chargeCode(arg) { this._chargeCode = arg; }
  get manager() { return this._manager; }
  set manager(arg) { this._manager = arg; }
}

const aPerson = new Person('daesang');
const manager = aPerson.manager;

