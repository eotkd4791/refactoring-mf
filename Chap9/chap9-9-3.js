// 9.3 파생 변수를 질의 함수로 바꾸기

// e.g. 1
/**
 * Init
 */
class ProductionPlan {
  constructor() {}
  get production() { return this._production; }
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amout;
  }
}

/**
 * Refactoring
 */

// #1
class ProductionPlan {
  constructor() {}
  get production() { 
    assert(this._production === this.calculateProduction);
    return this._production; 
  }
  
  get calculateProduction() {
    return this._adjustments
      .reduce((sum, a) => sum + a.amount, 0);
  }

  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amout;
  }
}

// #2
class ProductionPlan {
  constructor() {}
  get production() { 
    return this._adjustments
      .reduce((sum, a) => sum + a.amount, 0);
  }

  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
  }
}

// e.g. 2
/**
 * Init
 */
class ProductionPlan {
  constructor(production) {
    this._production = production;
    this._adjustments = [];
  }

  get production() { return this._production; }
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amout;
  }
}


/**
 * Refactoring
 */

// #1
class ProductionPlan {
  constructor(production) {
    this._initialProduction = production;
    this._adjustments = [];
  }
  
  get production() { 
    return this.calculatedProductionAccumulator;
  }

  get calculatedProductionAccumulator() {
    return this._adjustments
      .reduce((sum, a) => sum + a.amout, 0);
  }

  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amout;
  }
}