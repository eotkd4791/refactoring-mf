// 11.7 세터 제거하기

/**
 * Init
 */
class Person {
  get name() { return this._name; }
  set name(arg) { this._name = arg; }
  get id() { return this._id; }
  set id(arg) { this._id = arg; }
}

const stef = new Person();
stef.name = 'stef';
stef.id = '4791';

/**
 * Refactoring
 */

// #1
class Person {
  constructor(id) {
    this._id = id;
  }
  get name() { return this._name; }
  set name(arg) { this._name = arg; }
  get id() { return this._id; }
}

const stef = new Person('4791');
stef.name = 'stef';
