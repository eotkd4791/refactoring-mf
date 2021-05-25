// 12.3 생성자 본문 올리기

// e.g. 1

/**
 * Init
 */
class Party {}

class Employee extends Party {
  constructor(name, id, monthlyCost) {
    super();
    this._id = id;
    this._name = name;
    this._monthlyCost = monthlyCost;
  }
}

class Department extends Party {
  constructor(name, staff) {
    super();
    this._name = name;
    this._staff = staff;
  }
}

/**
 * Refactoring
 */

// #1
class Party {
  constructor(name) {
    this._name = name;
  }
}

class Employee extends Party {
  constructor(name, id, monthlyCost) {
    super(name);
    this._id = id;
    this._monthlyCost = monthlyCost;
  }
}

class Department extends Party {
  constructor(name, staff) {
    super(name);
    this._staff = staff;
  }
}


// e.g. 2

/**
 * Init
 */
class Employee {
  constructor(name) { /* ... */ }
  get isPrivileged() { /* ... */ }
  assignCar() { /* ... */ }
}

class Manager extends Employee {
  constructor(name, grade) {
    super(name);
    this._grade = grade;
    if (this.isPrivileged) this.assignCar();
  }

  get isPrivileged() {
    return this._grade > 4;
  }
}

/**
 * Refactoring
 */

// #1
class Employee {
  constructor(name) { /* ... */ }
  get isPrivileged() { /* ... */ }
  assignCar() { /* ... */ }
}

class Manager extends Employee {
  constructor(name, grade) {
    super(name);
    this._grade = grade;
    this.finishConstruction();
  }

  finishConstruction() {
    if (this.isPrivileged) this.assignCar();
  }

  get isPrivileged() {
    return this._grade > 4;
  }
}

// #2
class Employee {
  constructor(name) { /* ... */ }
  get isPrivileged() { /* ... */ }
  assignCar() { /* ... */ }
  finishConstruction() {
    if (this.isPrivileged) this.assignCar();
  }
}

class Manager extends Employee {
  constructor(name, grade) {
    super(name);
    this._grade = grade;
    this.finishConstruction();
  }

  get isPrivileged() {
    return this._grade > 4;
  }
}