// 12.1 메서드 올리기

/**
 * Init
 */
class Party { /* ... */}

class Employee extends Party {
  get annualCost() {
    return this.monthly * 12;
  }
}

class Department extends Party {
  get totalAnnualCost() {
    return this.monthly * 12;
  }
}

/**
 * Refactoring
 */

// #1
class Party {
  get annualCost() {
    return this.monthly * 12;
  }
}

class Employee extends Party { /* ... */}
class Department extends Party { /* ... */}

// 같은 동작을 하는 함수의 이름을 바꾸고 (함수 선언 바꾸기) 슈퍼 클래스(Party)로 옮긴다.

// #2
// 자바스크립트가 동적 언어라서 monthlyCost가 없어도 잘 동작한다.
// 추후에 서브클래스가 더해지면 Party의 서브 클래스가 monthlyCost를 구현해야 한다는 사실을 알려주는 것이 좋다.

class SubclassResponsibilityError extends Error {
  constructor(message) {
    super(message);
    this.name = 'SubclassResponsibilityError';
  }
}

class Party {
  get monthlyCost() { 
    throw new SubclassResponsibilityError('서브 클래스 책임 오류');
  }
  get annualCost() {
    return this.monthly * 12;
  }
}

class App {
  constructor() {
    this.start();
  }

  start() {
    try {
      const party = new Party();
      const monthlyCost = party.monthlyCost;
      return monthlyCost;
    } catch (error) {
      console.error(error);
    }
  }
}

new App();