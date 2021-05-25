// 11.1 질의 함수와 변경 함수 분리하기

/**
 * Init
 */

function alertForMiscreant(people) {
  for( const p of people ) {
    if( p === 'Joker' ) {
      setOffAlarms();
      return 'Joker';
    }
    if( p === 'Batman' ) {
      setOffAlarms();
      return 'Batman';
    }
  }
  return '';
}

function App() {
  const found = alertForMiscreant(people);
}


/**
 * Refactoring
 */

// #1 함수 복제 및 함수 이름 질의 목적에 맞게 변경하기
function findMiscreant(people) {
  for( const p of people ) {
    if( p === 'Joker' ) {
      setOffAlarms();
      return 'Joker';
    }
    if( p === 'Batman' ) {
      setOffAlarms();
      return 'Batman';
    }
  }
  return '';
}

// #2 부수효과 제거
function findMiscreant(people) {
  for( const p of people ) {
    if( p === 'Joker' ) {
      return 'Joker';
    }
    if( p === 'Batman' ) {
      return 'Batman';
    }
  }
  return '';
}

// #3 
function findMiscreant(people) {
  for( const p of people ) {
    if( p === 'Joker' ) {
      return 'Joker';
    }
    if( p === 'Batman' ) {
      return 'Batman';
    }
  }
  return '';
}

function App() {
  const found = findMiscreant(people);
  alertForMiscreant(people);
}

// #4
function alertForMiscreant(people) {
  for( const p of people ) {
    if( p === 'Joker' ) {
      setOffAlarms();
      return;
    }
    if( p === 'Batman' ) {
      setOffAlarms();
      return;
    }
  }
  return;
}

function findMiscreant(people) {
  for( const p of people ) {
    if( p === 'Joker' ) {
      return 'Joker';
    }
    if( p === 'Batman' ) {
      return 'Batman';
    }
  }
  return '';
}

function App() {
  const found = findMiscreant(people);
  alertForMiscreant(people);
}

// #5  7.9 알고리즘 교체하기 적용
function alertForMiscreant(people) {
  if( findMiscreant(people) !== '' ) setOffAlarms();
}

function findMiscreant(people) {
  for( const p of people ) {
    if( p === 'Joker' ) {
      return 'Joker';
    }
    if( p === 'Batman' ) {
      return 'Batman';
    }
  }
  return '';
}

function App() {
  const found = findMiscreant(people);
  alertForMiscreant(people);
}