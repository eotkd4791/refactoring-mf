// 11.4 객체 통째로 넘기기

// e.g.1
/**
 * Init
 */
function App() {
  const aPlan = new HeatingPlan();

  const low = aRoom.daysTempRange.low;
  const high = aRoom.daysTempRange.high;
  if(!aPlan.withinRange(low, high))
    alerts.push('방 온도가 지정 범위를 벗어났습니다.');
}

class HeatingPlan {
  withinRange(bottom, top) {
    return (bottom >= this._temperatureRange.low)
      && (top <= this._temperatureRange.high);
  }
}

/**
 * Refactoring
 */

// #1
class HeatingPlan {
  withinRange(bottom, top) {
    return (bottom >= this._temperatureRange.low)
      && (top <= this._temperatureRange.high);
  }
  xxNEWwithinRange(aNumberRange) {
    return this.withinRange(aNumberRange.low, aNumberRange.high);
  }
}

function App() {
  const aPlan = new HeatingPlan();

  const low = aRoom.daysTempRange.low;
  const high = aRoom.daysTempRange.high;
  if(!aPlan.xxNEWwithinRange(aRoom.daysTempRange))
    alerts.push('방 온도가 지정 범위를 벗어났습니다.');
}

// #2
function App() {
  const aPlan = new HeatingPlan();

  if(!aPlan.xxNEWwithinRange(aRoom.daysTempRange))
    alerts.push('방 온도가 지정 범위를 벗어났습니다.');
}

// #3
class HeatingPlan {
  withinRange(aNumberRange) {
    return (aNumberRange.low >= this._temperatureRange.low)
      && (aNumberRange.high <= this._temperatureRange.high);
  }
}

function App() {
  const aPlan = new HeatingPlan();

  if(!aPlan.xxNEWwithinRange(aRoom.daysTempRange))
    alerts.push('방 온도가 지정 범위를 벗어났습니다.');
}


// e.g.2
/**
 * Init
 */
const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
if(!aPlan.withinRange(low, high))
  alerts.push('방 온도가 지정 범위를 벗어났습니다.');

/**
 * Refactoring
 */

// #1
const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
const isWithinRange = aPlan.withinRange(low, high);
if(!isWithinRange)
  alerts.push('방 온도가 지정 범위를 벗어났습니다.');

// #2
const tempRange = aRoom.daysTempRange;
const low = tempRange.low;
const high = tempRange.high;
const isWithinRange = aPLan.withinRange(low, high);
if(!isWithinRange) 
  alerts.push('방 온도가 지정 범위를 벗어났습니다.');

// #3
const tempRange = aRoom.daysTempRange;
const isWithinRange = xxNEWwithinRange(aPlan, tempRange);
if(!isWithinRange)
  alerts.push('방 온도가 지정 범위를 벗어났습니다.');

function xxNEWwithinRange(aPlan, tempRange) {
  const low = tempRange.low;
  const high = tempRange.high;
  const isWithinRange = aPLan.withinRange(low, high);
  return isWithinRange;
}

// #4
const tempRange = aRoom.daysTempRange;
const isWithinRange = aPlan.xxNEWwithinRange(tempRange);
if(!isWithinRange)
  alerts.push('방 온도가 지정 범위를 벗어났습니다.');

class HeatingPlan {
  xxNEWwithinRange(tempRange) {
    const low = tempRange.low;
    const high = tempRange.high;
    const isWithinRange = this.withinRange(low,high);
    return isWithinRange;
  }
}