// 과제1 문제 영역 시작
class Professor {
  constructor(course) {
		this._course = course;
  }
  get course() {
    return this._course;
  }
  get courseCode() {
    return this._course.code;
  }
  get courseCapacity() {
    return this._course.capacity;
  }
  get courseSubclass() {
    return this._course.subclass;
	}
}

// 과제1 문제 영역 끝


let prof = new Professor({code: "CS101", subclass: "B", capacity: 40});
console.log(prof.course);