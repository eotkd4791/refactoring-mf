// 6.10 여러 함수를 변환 함수로 묶기

function acquireReading() {
  return  { 
    customer: 'ivan',
    quantity: 10,
    month: 5,
    year: 2017
  };
}
function baseRate(month, year){}


// # init

// client 1
const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;


// client 2
const aReading = acquireReading();
const base = (baseRate(aReading.month, aReading.yaer) * aReading.quantity);
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

// client 3
const aReading = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading);

// 다른 곳에서 이미 만들어둠
function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}


/**
 * Refactoring
 */

// #1

// 깊은 복사용 함수.
function enrichReading(original) {
  // const result = _.cloneDeep(original);  lodash
  const result = JSON.parse(JSON.stringify(original));
  return result;
}

// #2
// client 3
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const basicChargeAmount = calculateBaseCharge(aReading);

function enrichReading(original) {
  const result = JSON.parse(JSON.stringify(original));
  result.baseCharge = calculateBaseCharge(result);
  return result;
}

// #3
// client 3
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const basicChargeAmount = aReading.baseCharge;

// #4
// client 1
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const baseCharge = aReading.baseCharge;

// #5
// client 2
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const base = (baseRate(aReading.month, aReading.yaer) * aReading.quantity);
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

// #6
// client 2
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const base = aReading.baseCharge;
const taxableCharge = Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));

// #7
function enrichReading(original) {
  const result = JSON.parse(JSON.stringify(original));
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(result.year));
  return result;
}

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const base = aReading.baseCharge;
const taxableCharge = aReading.taxableCharge;
