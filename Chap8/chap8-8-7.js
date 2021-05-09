// 8.7 반복문 쪼개기

/**
 * Init
 */

function func() {
  let youngest = people[0] ? people[0].age : Infinity;
  let totalSalary = 0;
  for (const p of people) {
    if(p.age < youngest) youngest = p.age;
    totalSalary += p.salary;
  }

  return `youngest: ${youngest}, total salary: ${totalSalary}`;
}


/**
 * Refactoring
 */

// #1
function func() {
  let youngest = people[0] ? people[0].age : Infinity;
  let totalSalary = 0;
  for (const p of people) {
    if(p.age < youngest) youngest = p.age;
  }
  for (const p of people) {
    totalSalary += p.salary;
  }

  return `youngest: ${youngest}, total salary: ${totalSalary}`;
}

// #2
function func() {
  let youngest = people[0] ? people[0].age : Infinity;
  for (const p of people) {
    if(p.age < youngest) youngest = p.age;
  }
  let totalSalary = 0;
  for (const p of people) {
    totalSalary += p.salary;
  }

  return `youngest: ${youngest}, total salary: ${totalSalary}`;
}


// #3
function func() {
  return `youngest: ${youngestAge()}, total salary: ${totalSalary()}`;

  function youngestAge() {
    let youngest = people[0] ? people[0].age : Infinity;
    for (const p of people) {
      if(p.age < youngest) youngest = p.age;
    }
    return youngest;
  }
  function totalSalary() {
    let totalSalary = 0;
    for (const p of people) {
      totalSalary += p.salary;
    }
    return totalSalary;
  }
}

// #4
function func() {
  return `youngest: ${youngestAge()}, total salary: ${totalSalary()}`;

  function youngestAge() {
    return Math.min(...people.map(p => p.age));
  }
  function totalSalary() {
    return people.reduce((total, p) => total + p.salary, 0);
  }
}