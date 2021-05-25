// 11.3 플래그 인수 제거하기

// e.g.1

/**
 * Init
 */
function deliveryDate(anOrder, isRush) {
  if(isRush) {
    let deliveryTime;
    if(['MA', 'CT']     .includes(anOrder.deliveryState)) deliveryTime = 1;
    else if(['NY', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 2;
    else deliveryTime = 3;
    return anOrder.placedOn.plusDays(1 + deliveryTime);
  }
  else {
    let deliveryTime;
    if(['MA', 'CT']     .includes(anOrder.deliveryState)) deliveryTime = 2;
    else if(['NY', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 3;
    else deliveryTime = 4;
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}

aShipment.deliveryDate = deliveryDate(anOrder, true);
aShipment.deliveryDate = deliveryDate(anOrder, false);

/**
 * Refactoring
 */

// #1 조건문 분해하기
function deliveryDate(anOrder, isRush) {
  if(isRush) return rushDeliveryDate(anOrder);
  else       return regularDeliveryDate(anOrder);
}

function rushDeliveryDate(anOrder) {
  let deliveryTime;
  if(['MA', 'CT']     .includes(anOrder.deliveryState)) deliveryTime = 1;
  else if(['NY', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 2;
  else deliveryTime = 3;
  return anOrder.placedOn.plusDays(1 + deliveryTime);
}

function regularDeliveryDate(anOrder) {
  let deliveryTime;
  if(['MA', 'CT']     .includes(anOrder.deliveryState)) deliveryTime = 2;
  else if(['NY', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 3;
  else deliveryTime = 4;
  return anOrder.placedOn.plusDays(2 + deliveryTime);
}

aShipment.deliveryDate = rushDeliveryDate(anOrder);
aShipment.deliveryDate = regularDeliveryDate(anOrder);


// e.g.2
/**
 * Init
 */
function deliveryDate(anOrder, isRush) {
  let result;
  let deliveryTime;
  if(anOrder.deliveryState === 'MA' || anOrder.deliveryState === 'CT')
    deliveryTime = isRush ? 1 : 2;
  else if(anOrder.deliveryState === 'NY' || anOrder.deliveryState === 'NH') {
    deliveryTime = 2;
    if(anOrder.delivery === 'NH' && !isRush)
      deliveryTime = 3;
  }
  else if(isRush) 
    deliveryTime = 3;
  else if(anOrder.deliveryState === 'ME')
    deliveryTime = 3;
  else
    deliveryTime = 4;

  result = anOrder.placedOn.plusDays(2 + deliveryTime);
  if(isRush) result = result.minusDays(1);
  return result;
}

/**
 * Refactoring
 */

// #1
function rushDeliveryDate (anOrder) {return deliveryDate(anOrder, true);}
function regularDeliveryDate (anOrder) {return deliveryDate(anOrder, false);}

// #2
function rushDeliveryDate(anOrder) {

  let deliveryTime;
  if(anOrder.deliveryState === 'MA' || anOrder.deliveryState === 'CT')
    deliveryTime = 1;
  else if(anOrder.deliveryState === 'NY' || anOrder.deliveryState === 'NH') 
    deliveryTime = 2;
  else if(anOrder.deliveryState === 'ME')
    deliveryTime = 3;

  result = anOrder.placedOn.plusDays(1 + deliveryTime);
  return result;
}

function regularDeliveryDate(anOrder) {
  let result;
  let deliveryTime;
  if(
    anOrder.deliveryState === 'MA' || 
    anOrder.deliveryState === 'CT' || 
    anOrder.deliveryState === 'NY'
    )
    deliveryTime = 2;
  else if(
    anOrder.delivery === 'NH' || 
    anOrder.deliveryState === 'ME'
  )
    deliveryTime = 3;
  else
    deliveryTime = 4;

  result = anOrder.placedOn.plusDays(2 + deliveryTime);
  return result;
}

aShipment.deliveryDate = rushDeliveryDate(anOrder);
aShipment.deliveryDate = regularDeliveryDate(anOrder);