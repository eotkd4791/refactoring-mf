// 8.6 문장 슬라이드하기

// e.g.1

/**
 * Init
 */

const pricingPlan = retrievePricingPlan();
const order = retreiveOrder();
const baseCharge = pricingPlan.base;
let charge;
const chargePerUnit = pricingPlan.unit;
const units = order.units;
let discount; // !
charge = baseCharge + units * chargePerUnit;
let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);
discount = discountableUnits * pricingPlan.discountFactor;
if(order.isRepeat) discount += 20;
charge = charge - discount;
chargeOrder(charge);

/**
 * Refactoring
 */
const pricingPlan = retrievePricingPlan();
const baseCharge = pricingPlan.base;
const chargePerUnit = pricingPlan.unit;

const order = retreiveOrder(); // *
const units = order.units;
let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);

let discount; // *
discount = discountableUnits * pricingPlan.discountFactor;
if(order.isRepeat) discount += 20;

let charge;
charge = baseCharge + units * chargePerUnit;
charge = charge - discount;
chargeOrder(charge);


// e.g.2

/**
 * Init
 */
function func() {
  let result;
  if(availableResources.length ===0) {
    result = createResource();
    allocatedResources.push(result);
  } else {
    result = availableResources.pop();
    allocatedResources.push(result);
  }
  return result;
}

/**
 * Refactoring
 */
function func() {
  let result;
  if(availableResources.length ===0) {
    result = createResource();
  } else {
    result = availableResources.pop();
  }
  allocatedResources.push(result);
  return result;
}