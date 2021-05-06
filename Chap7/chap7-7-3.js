// 7.3 기본형을 객체로 바꾸기

/**
 * * Init
 */
class Order {
  constructor(data) {
    this.priority = data.priority;
  }
}

const highPriorityCount = orders.filter(o => 'high' === o.priority || 'rush' === o.priority).length;



/**
 * * Refactoring
 */


// #1
class Order {
  constructor(data) {
    this._priority = data.priority;
  }
  get priority() { return this._priority; }
  set priority(aString) { this._priority = aString; }
}

// #2
class Priority {
  constructor(value) { this._value = value; }
  toString() { return this._value; }
}

// #3
class Order {
  constructor(data) {
    this._priority = data.priority;
  }
  get priority() { return this._priority.toString(); }
  set priority(aString) { this._priority = new Priority(aString); }
}

// #4
class Order {
  constructor(data) {
    this._priority = data.priority;
  }
  get priorityString() { return this._priority.toString(); }
  set prioritypriorityString(aString) { this._priority = new Priority(aString); }
}

// #5
class Priority {
  constructor(value) { 
    if(value instanceof Priority)  return value;
    if(Priority.legalValues().include(value)) this._value = value;
    else throw new Error(`${value} is invalid for Priority`)
  }
  toString() { return this._value; }
  get _index() { return Priority.legalValues().findIndex(s => s === this._value);; }
  static legalValues() { return ['low','normal','high','rush']; }
  equals(other) { return this._index === other._index; }
  higherThan(other) { return this._index > other._index; }
  lowerThan(other) { return this._index < other._index; }
}

highPriorityCount = orders.filter(o => o.priority.higherThan(new Priority('normal fruits'))).length;