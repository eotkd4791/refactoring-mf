// 7.2 컬렉션 캡슐화하기

/**
 * Init
 */

class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }
  get name() { return this._name; }
  get courses() { return this._courses; }
  set courses(aList) { this._courses = aList; } // !
}

class Course {
  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }
  get name() { return this._name; }
  get isAdvanced() { return this._isAdvanced; }
}

/**
 * Refactoring
 */


// #1

class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }
  addCourse(aCourse) {
    this._courses.push(aCourse);
  }
  removeCourse(aCourse, fnIfAbsent = () => { throw new RangeError(`해당 과목은 교과 과목에 없습니다.`); }) {
    const index = this._courses.findIndex(course => course === aCourse);
    if(index === -1) fnIfAbsent();
    else this._courses.splice(index, 1);
  }

  get name() { return this._name; }
  get courses() { return this._courses; }
}

for(const name of readBasicCourseNames(filename)) {
  aPerson.addCourse(new Course(name, false));
}

// #2
class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }
  addCourse(aCourse) {
    this._coursese.push(aCourse);
  }
  removeCourse(aCourse, fnIfAbsent = () => { throw new RangeError(`해당 과목은 교과 과목에 없습니다.`); }) {
    const index = this._courses.findIndex(course => course === aCourse);
    if(index === -1) fnIfAbsent();
    else this._courses.splice(index, 1);
  }

  get name() { return this._name; }
  get courses() { return [...this._courses]; } // * 데이터 변경 제어 -> 복제본 제공
  set courses(aList) { this._courses = [...aList]; } // * 원본 데이터 변경 제어 -> 복제본 제공
}