// 11.6 질의 함수를 매개변수로 바꾸기

/**
 * Init
 */
class HeatingPlan {
  get targetTemperature() {
    if(thermostat.selectedTemperature > this._max) return this._max;
    else if(thermostat.selectedTemperature < this._min) return this._min;
    else return thermostat.selectedTemperature;
  }
}

const thePlan = new HeatingPlan();
if(thePlan.targetTemperature > thermostat.currentTemperature) setToHeat();
else if(thePlan.targetTemperature < thermostat.currentTemperature) setToCool();
else setOff();

/**
 * Refactoring
 */

// #1
class HeatingPlan {
  get targetTemperature() {
    const selectedTemperature = thermostat.selectedTemperature;
    if(selectedTemperature > this._max) return this._max;
    else if(selectedTemperature < this._min) return this._min;
    else return selectedTemperature;
  }
}

// #2
class HeatingPlan {
  get targetTemperature() {
    const selectedTemperature = thermostat.selectedTemperature;
    return this.xxNEWtargetTemperature(selectedTemperature);
  }
  xxNEWtargetTemperature(selectedTemperature) {
    if(selectedTemperature > this._max) return this._max;
    else if(selectedTemperature < this._min) return this._min;
    else return selectedTemperature;
  }
}


// #3
class HeatingPlan {
  get targetTemperature() {
    return this.xxNEWtargetTemperature(thermostat.selectedTemperature);
  }
  xxNEWtargetTemperature(selectedTemperature) {
    if(selectedTemperature > this._max) return this._max;
    else if(selectedTemperature < this._min) return this._min;
    else return selectedTemperature;
  }
}

const thePlan = new HeatingPlan();
if(thePlan.xxNEWtargetTemperature(thermostat.selectedTemperature) > thermostat.currentTemperature) setToHeat();
else if(thePlan.xxNEWtargetTemperature(thermostat.selectedTemperature) < thermostat.currentTemperature) setToCool();
else setOff();

// #4
class HeatingPlan {
  targetTemperature(selectedTemperature) {
    if(selectedTemperature > this._max) return this._max;
    else if(selectedTemperature < this._min) return this._min;
    else return selectedTemperature;
  }
}

const thePlan = new HeatingPlan();
if(thePlan.targetTemperature(thermostat.selectedTemperature) > thermostat.currentTemperature) setToHeat();
else if(thePlan.targetTemperature(thermostat.selectedTemperature) < thermostat.currentTemperature) setToCool();
else setOff();