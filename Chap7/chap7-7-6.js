// 7.6 클래스 인라인하기

/**
 * Init
 */
class TrackingInformation {
  get shippingCompany() { return this._shippingCompany; }
  set shippingCompany(arg) { this._shippingCompany = arg; }
  get trackingNumber() { return this._trackingNumber; }
  set trackingNumber(arg) { this._trackingNumber = arg; }
  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

class Shipment {
  constructor() {
    this._trackingInformation = new TrackingInformation();
  }
  get trackingInfo() {
    return this._trackingInformation.display;
  }
  get trackingInfomation() { return this._trackingInformation; }
  set trackingInformation(aTrackingInformation) {
    this._trackingInformation = aTrackingInformation;
  }
}

// * TrackingInformation 메소드 호출코드
const aShipment = new Shipment();
aShipment.trackingInformation.shippingCompany = request.vendor;

/**
 * Refactoring
 */

// #1
class TrackingInformation {
  get shippingCompany() { return this._shippingCompany; }
  set shippingCompany(arg) { this._shippingCompany = arg; }
  get trackingNumber() { return this._trackingNumber; }
  set trackingNumber(arg) { this._trackingNumber = arg; }
  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

class Shipment {
  constructor() {
    this._trackingInformation = new TrackingInformation();
  }
  get trackingInfo() {
    return this._trackingInformation.display;
  }
  get trackingInfomation() { return this._trackingInformation; }
  set trackingInformation(aTrackingInformation) {
    this._trackingInformation = aTrackingInformation;
  }
  set shippingCompany(arg) { this._trackingInformation.shippingCompany = arg; } // ! +
}
const aShipment = new Shipment();
aShipment.shippingCompany = request.vendor; // ! +


// #2
class TrackingInformation {
  get trackingNumber() { return this._trackingNumber; }
  set trackingNumber(arg) { this._trackingNumber = arg; }
  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

class Shipment {
  get trackingInfo() { return `${this.shippingCompany}: ${this.trackingNumber}`; }
  get trackingNumber() { return this._trackingNumber; }
  set trackingNumber(arg) { this._trackingNumber = arg; }
  get shippingCompany() { return this._shippingCompany; }
  set shippingCompany(arg) { this._shippingCompany = arg; }
}
const aShipment = new Shipment();
aShipment.shippingCompany = request.vendor;



// #3
class Shipment {
  get trackingInfo() { return `${this.shippingCompany}: ${this.trackingNumber}`; }
  get shippingCompany() { return this._shippingCompany; }
  set shippingCompany(arg) { this._shippingCompany = arg; }
  get trackingNumber() { return this._trackingNumber; }
  set trackingNumber(arg) { this._trackingNumber = arg; }
}

const aShipment = new Shipment();
aShipment.shippingCompany = request.vendor;