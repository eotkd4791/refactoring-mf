// 11.8 생성자를 팩토리 함수로 바꾸기

/**
 * Init
 */
class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() { return this._name; }
  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }
  static get legalTypeCodes() {
    return { 'E': 'Engineer', 'M': 'Manager', 'S': 'Salesperson' };
  }
}

const candidate = new Employee(document.name, document.empType);
const leadEngineer = new Employee(document.leadEngineer, 'E');

/**
 * Refactoring
 */

// #1
function createEmployee(name, typeCode) {
  return new Employee(name, typeCode);
}

// #2
const candidate = createEmployee(document.name, document.empType);

// #3 문자열 리터럴을 함수에 전달하는 것은 악취이다.
const leadEngineer = createEmployee(document.leadEngineer, 'E');


// #4 따라서 Engineer를 생성하는 팩토리 함수를 하나 만든다.
function createEngineer(name) {
  return new Employee(name);
}

const leadEngineer = createEngineer(document.leadEngineer);