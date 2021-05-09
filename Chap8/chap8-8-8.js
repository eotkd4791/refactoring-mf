// 8.8 반복문을 파이프라인으로 바꾸기

/**
 * Init
 */
function acquireData(input) {
  const lines = input.split('\n');
  let firstLine = true;
  const result = [];
  for (const line of lines) {
    if(firstLine) {
      firstLine = false;
      continue;
    }
    if(line.trim() === '') continue;
    const record = line.split(',');
    if( record[1].trim() === 'India') {
      result.push({city: record[0].trim(), phone: record[2].trim()});
    }
  }
  return result;
}


/**
 * Refactoring
 */

// #1
function acquireData(input) {
  const lines = input.split('\n');
  let firstLine = true;
  const result = [];
  const loopItems = lines;
  for (const line of loopItems) {
    if(firstLine) {
      firstLine = false;
      continue;
    }
    if(line.trim() === '') continue;
    const record = line.split(',');
    if( record[1].trim() === 'India') {
      result.push({city: record[0].trim(), phone: record[2].trim()});
    }
  }
  return result;
}

// #2
function acquireData(input) {
  const lines = input.split('\n');

  const result = [];
  const loopItems = lines.slice(1);
  for (const line of loopItems) {
    if(line.trim() === '') continue;
    const record = line.split(',');
    if( record[1].trim() === 'India') {
      result.push({city: record[0].trim(), phone: record[2].trim()});
    }
  }
  return result;
}

// #3
function acquireData(input) {
  const lines = input.split('\n');
  const result = [];
  const loopItems = lines
    .slice(1)
    .filter(line => line.trim() !== '')
    .map(line => line.split(','))
    ;

  for (const line of loopItems) {
    const record = line;
    if( record[1].trim() === 'India') {
      result.push({city: record[0].trim(), phone: record[2].trim()});
    }
  }
  return result;
}

// #4
function acquireData(input) {
  const lines = input.split('\n');
  const result = [];
  const loopItems = lines
    .slice(1)
    .filter(line => line.trim() !== '')
    .map(line => line.split(','))
    .filter(record => record[1].trim() === 'India')
    ;

  for (const line of loopItems) {
    const record = line;
    result.push({city: record[0].trim(), phone: record[2].trim()});
  }
  return result;
}

// #5
function acquireData(input) {
  const lines = input.split('\n');
  const result = lines
    .slice(1)
    .filter(line => line.trim() !== '')
    .map(line => line.split(','))
    .filter(record => record[1].trim() === 'India')
    .map(record => ({city: record[0].trim(), phone: record[2].trim()}));
    ;
  return result;
}


// #6
function acquireData(input) {
  const lines = input.split('\n');
  return lines
        .slice  (1)
        .filter (line => line.trim() !== '')
        .map    (line => line.split(','))
        .filter (field => field[1].trim() === 'India')
        .map    (field => ({city: field[0].trim(), phone: field[2].trim()}));
        ;
}