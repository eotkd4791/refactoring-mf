// 7.1 레코드 캡슐화하기

// e.g. 1 간단한 레코드 캡슐화하기
const organization = { name: '애크미 구스베리', country: 'GB'}; // 레코드

/**
 *  레코드 vs 객체
 */

class Oragnization {
  constructor(data) {
    this._name = data.name;
    this.country = data.country;
  }

  get name() { return this._name; }
  get country() { return this.country; }
  set name(arg) { this._name = arg; }
  set country(arg) { this._country = arg; }
}

const organization = new Oragnization({ name: '애크미 구스베리', country: 'GB'}); // 객체




/**
 * Init
 */

const organization = { name: '애크미 구스베리', country: 'GB'};

result += `<h1>${organization.name}</h1>`; // read
organization.name = newName;               // write

/**
 * Refactoring
 */

// #1
function getRawDataOfOrganization() { return organization; }

result += `<h1>${getRawDataOfOrganization().name}</h1>`; // read
getRawDataOfOrganization().name = newName;              // write

// #2
class Organization {
  constructor(data) {
    this._data = data;
  }
}

const organization = new Oragnization({ name: '애크미 구스베리', country: 'GB'});
function getRawDataOfOrganization() { return organization._data; }
function getOrganization() { return organization; }

// #3
class Oragnization {
  constructor(data) {
    this._name = data.name;
    this.country = data.country;
  }

  get name() { return this._name; }
  set name(aString) { this._name = aString; }
  get country() { return this.country; }
  set country(aCountryCode) { this._country = aCountryCode; }
}

// e.g. 2 중첩된 레코드 캡슐화하기

/**
 * Init
 */

// JSON data
const customerData = {
  "1920": {
    name: "Martin",
    id: "1920",
    usages: {
      "2016": {
        "1": 50,
        "2": 55
      },
      "2015": {
        "1": 70,
        "2": 63
      },
    }
  },
  "38673": {
    name: "Neil",
    id: "38673"
  }
};


// read, write시에 데이터 구조 안으로 더 깊숙히 들어가야한다.

/**
 * Refactoring - write
 */

// #1
function getRawDataOfCustomers() { return customerData; }
function setRawDataOfCustomers(arg) { customerData = arg; }


// #2
class CustomerData {
  constructor(data) {
    this._data = data;
  }
}

function getCustomerData() { return customerData; }
function getRawDataOfCustomers() { return customerData._data; }
function setRawDataOfCustomers(arg) { customerData = new CustomerData(arg); }

getRawDataOfCustomers()[customerID].usages[year][month] = amount; // write

// #3 세터로 뽑아내기 (함수 추출)
setUsage(customerID, year, month, amount);

function setUsage(customerID, year, month, amount) {
  getRawDataOfCustomers()[customerID].usages[year][month] = amount;
}

// #4
getCustomerData().setUsage(customerID, year, month, amount); // write

class CustomerData {
  constructor(data) {
    this._data = data;
  }

  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }
}

// #4
function getCustomerData() { return customerData; }
function getRawDataOfCustomers() { return customerData._data; }
function setRawDataOfCustomers(arg) { customerData = new CustomerData(arg); }

class CustomerData {
  constructor(data) {
    this._data = data;
  }

  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }

  get rawData() { return _.cloneDeep(this._data); }
}


/**
 * Refactoring - read
 */

// #1
class CustomerData {
  constructor(data) {
    this._data = data;
  }

  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }
  usage(customerID, year, month) {
    return this._data[customerID].usages[year][month];
  }

  get rawData() { return _.cloneDeep(this._data); }
}


function compareUsage(customerID, laterYear, month) {
  const later = getCustomerData().usage(customerID, laterYear, month);
  const earlier = getCustomerData().usage(customerID, laterYear - 1, month);
  return {
    laterAmount: later,
    change: later - earlier
  };
}

// #2 - 1 복제본 반환하기
class CustomerData {
  constructor(data) {
    this._data = data;
  }

  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }
  usage(customerID, year, month) {
    return this._data[customerID].usages[year][month];
  }

  get rawData() { return _.cloneDeep(this._data); }
}

function compareUsage(customerID, laterYear, month) {
  const later = getCustomerData().rawData[customerID].usages[laterYear][month];
  const earlier = getCustomerData().rawData[customerID].usages[laterYear - 1][month];
  return {
    laterAmount: later,
    change: later - earlier
  };
}

// #2 - 2 캡슐화를 재귀적으로 
/**
 * 1. 고객 정보 레코드를 클래스로 바꾸기
 * 2. 컬렉션 캡슐화
 * 3. 접근자를 이용하여 갱신 제한
 */