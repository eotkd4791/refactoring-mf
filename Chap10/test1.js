class Student {
	constructor() {
    this._courses = [];
    this._grade = 0;
  }
  
  addCourse(course)  {
    this._courses.push(course);
    this.grade = this.totalGrade;
  }
  
  get courses() {
    return this._courses;
  }

  set grade(arg) {
    this._grade = arg;
  }

  get grade() {
    return this._grade;
  }

  get totalWeights() {
    return this._courses.reduce((total, { weight }) => total + weight, 0);
  }
  
  get totalGrade() {
    return this.courses.reduce((total, course) => total + (course.grade * course.weight), 0) / this.totalWeights;
  }
}

/////////// 여기까지 과제2 문제 영역

let student = new Student();
student.addCourse({grade:4.0, weight:1.0})
student.addCourse({grade:3.7, weight:0.5})
student.addCourse({grade:3.0, weight:1.0})
student.addCourse({grade:4.0, weight:0.5})

console.log(`졸업 평점은 ${student.grade} 입니다`)