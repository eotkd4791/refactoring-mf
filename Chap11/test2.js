class Game {
	constructor(name) {
    this._name = name;
  }
  
  get controller() {
  	return this._controller;
  }
   
   // 객체 통째로 넘기기, 함수 선언 바꾸기
  set controller(aController) {
    this._controller = aController;
  }
  
  get controllerConfiguration() { 
  	return this.controller.configuration; 
  }
}

class Controller {
	constructor(name, configuration) {
    this._name = name;
    this._configuration = configuration;
  }
  
  get configuration() {return this._configuration;}
}

function testFunction(game, controller) {
	game.setController(controller);
	return game.controllerConfiguration;
}

// 이하 수정 금지
let game = new Game("RedDeadRedemption2");
let controller = new Controller("DualShock4", "xyz_analog_trigger_vibe");
console.log(testFunction(game, controller))