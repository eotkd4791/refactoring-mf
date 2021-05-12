// 9.5 값을 참조로 바꾸기

/**
 * Init
 */
class Order {
  constructor(data) {
    this._number = data.number;
    this._customer = new Customer(data.customer);
  }
  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id) {
    this._id = id;
  }
  get id() { return this._id; }
}

/**
 * Refactoring
 */

// #1 저장소 객체를 만들어서 객체를 관리함. 객체가 중복해서 만들어지는 상황 예방
let _repositoryData;

export function initialize() {
  _repositoryData = {};
  _repositoryData.customers = new Map();
}

export function registerCustomer(id) {
  if(! _repositoryData.customer.has(id)) 
    _repositoryData.customers.set(id, new Customer(id));
  return findCustomer(id);
}

export function findCustomer(id) {
  return _repositoryData.customers.get(id);
}

// #2
import { registerCustomer } from 'repository.js';

class Order {
  constructor(data) {
    this._number = data.number;
    this._customer = registerCustomer(data.customer);
  }
  get customer() {
    return this._customer;
  }
}