// 9.1 변수 쪼개기

// e.g. 1

/**
 * Init
 */
function distanceTravelled (scenario, time) {
  let result;
  let acc = scenario.primaryForce / scenario.mass; // !
  let primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * acc * primaryTime * primaryTime;
  let secondaryTime = time - scenario.delay;
  if(secondaryTime > 0) {
    let primaryVelocity = acc * scenario.delay;
    acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass; // !
    result += primaryVelocity * secondaryTime
              + 0.5 * acc * secondaryTime * secondaryTime;
  }
  return result;
}

/**
 * Refactoring
 */

// #1
function distanceTravelled (scenario, time) {
  let result;
  const primaryAcceleration = scenario.primaryForce / scenario.mass; // !
  let primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime;
  let secondaryTime = time - scenario.delay;
  if(secondaryTime > 0) {
    let primaryVelocity = primaryAcceleration * scenario.delay;
    let acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass; // !
    result += primaryVelocity * secondaryTime
              + 0.5 * acc * secondaryTime * secondaryTime;
  }
  return result;
}


// #2
function distanceTravelled (scenario, time) {
  let result;
  const primaryAcceleration = scenario.primaryForce / scenario.mass; // !
  let primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime;
  let secondaryTime = time - scenario.delay;
  if(secondaryTime > 0) {
    let primaryVelocity = primaryAcceleration * scenario.delay;
    const secondaryAcceleration = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass; // !
    result += primaryVelocity * secondaryTime
              + 0.5 * secondaryAcceleration * secondaryTime * secondaryTime;
  }
  return result;
}


// e.g. 2

/**
 * Init
 */
function discount(inputValue, quantity) {
  if(inputValue > 50) inputValue = inputValue - 2;
  if(quantity > 100) inputValue = inputValue - 1;
  return inputValue;
}

/**
 * Refactoring
 */

// #1
function discount(originalInputValue, quantity) {
  let inputValue = originalInputValue;
  if(inputValue > 50) inputValue = inputValue - 2;
  if(quantity > 100) inputValue = inputValue - 1;
  return inputValue;
}

// #2
function discount(inputValue, quantity) {
  let result = inputValue;
  if(inputValue > 50) result = result - 2;
  if(quantity > 100) result = result - 1;
  return result;
}