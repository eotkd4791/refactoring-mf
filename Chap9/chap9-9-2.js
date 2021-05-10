// 9.2 필드 이름 바꾸기

/**
 * Init
 */

const organization = {name: '애크미 구스베리', country: 'GB'};

/**
 * Refactoring
 */

// #1
class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }

  get name() { return this._name; }
  set name(aString) { this._name = aString; }
  get country() { return this._country; }
  set country(aCountryCode) { this._country = aCountryCode; }
}

const organization = new Organization({name: '애크미 구스베리', country: 'GB'});

// #2
class Organization {
  constructor(data) {
    this._title = data.name;
    this._country = data.country;
  }

  get name() { return this._title; }
  set name(aString) { this._name = aString; }
  get country() { return this._country; }
  set country(aCountryCode) { this._country = aCountryCode; }
}

// #3
class Organization {
  constructor(data) {
    this._title = data.title;
    this._country = data.country;
  }

  get title() { return this._title; }
  set title(aString) { this._title = aString; }
  get country() { return this._country; }
  set country(aCountryCode) { this._country = aCountryCode; }
}

const organization = new Organization({title: '애크미 구스베리', country: 'GB'});