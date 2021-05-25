class DeepFryer {
	constructor() {
    this._currentTemp = 23;
  }
  
  adjustTemperature(min, max) {
    if(this._currentTemp < min) {
    	this._currentTemp += (min-this._currentTemp)/2;
    }
    if(this._currentTemp > max) {
    	this._currentTemp -= (this._currentTemp - max)/2;
    }
  }
  
  get currentTemp() {return this._currentTemp;}
}

class FryingObject {
	constructor(name, minTemp, maxTemp) {
  	this._name = name;
    this._minTemp = minTemp;
    this._maxTemp = maxTemp;
  }
  
  get name() {return this._name;}
  get minTemp() {return this._minTemp;}
  get maxTemp() {return this._maxTemp;}
}

function testFunction(deepFryer, fryingObject) {
	let min = fryingObject.minTemp;
  let max = fryingObject.maxTemp;
	deepFryer.adjustTemperature(min, max);
  return deepFryer.currentTemp;
}

// 이하 수정 금지
let deepFryer= new DeepFryer();
let fryingObject = new FryingObject("shoe", 130, 150);
console.log(testFunction(deepFryer, fryingObject));