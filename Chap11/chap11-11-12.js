// 11.12 오류 코드를 예외로 바꾸기

/**
 * Init
 */
function localShippingRules(country) {
  const data = countryData.shippingRules[country];
  if (data) return new ShippingRules(data);
  else return -23;
}

function calculateShippingCosts(anOrder) {
  const shippingRules = localShippingRules(anOrder.country);
  if(shippingRules < 0) return shippingRules;
}

const status = calculateShippingCosts(orderData);
if(status < 0) errorList.push({ order: orderData, errorCode: status });

/**
 * Refactoring
 */

// #1 status의 유효범위가 try 블록으로 국한된다.
try {
  const status = calculateShippingCosts(orderData);
} catch(e) {
  throw e;
}
if(status < 0) errorList.push({order: orderData, errorCode: status});


// #2 status 선언과 할당을 

let status;
status = calculateShippingCosts(orderData);
if(status < 0) errorList.push({order: orderData, errorCode: status});