// 8.1 함수 옮기기 

// e.g.1

/**
 * Init
 */
function trackSummary(points) {
  const totalTime = calcultateTime();
  const totalDistance = calcultateDistance();
  const pace = totalTime / 60 / totalDistance;
  return {
    time: totalTime,
    distance: totalDistance,
    pace: pace
  };

  function calcultateDistance() {
    let result = 0;
    for(let i=1; i<points.length; i++) {
      result += distance(points[i-1], points[i]);
    }
    return result;
  }
  
  function distance(p1, p2) {
    const EARTH_RADIUS = 3959;
    const dLat = radians(p2.lat) - radians(p1.lat);
    const dLon = radians(p2.lon) - radians(p1.lon);
    const a = Math.pow(Math.sin(dLat / 2), 2)
            + Math.cos(radians(p2.lat))
            * Math.cos(radians(p1.lat))
            * Math.pow(Math.sin(dLon / 2), 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS * c;
  }
  function radians(degrees) {
    return degrees * Math.PI / 180;
  }
  function calculateTime() {}
}


/**
 * Refactoring
 */

// #1
function trackSummary(points) {
  const totalTime = calcultateTime();
  const totalDistance = calcultateDistance();
  const pace = totalTime / 60 / totalDistance;
  return {
    time: totalTime,
    distance: totalDistance,
    pace: pace
  };

  function calcultateDistance() {
    let result = 0;
    for(let i=1; i<points.length; i++) {
      result += distance(points[i-1], points[i]);
    }
    return result;
  }
  
  function distance(p1, p2) {
    const EARTH_RADIUS = 3959;
    const dLat = radians(p2.lat) - radians(p1.lat);
    const dLon = radians(p2.lon) - radians(p1.lon);
    const a = Math.pow(Math.sin(dLat / 2), 2)
            + Math.cos(radians(p2.lat))
            * Math.cos(radians(p1.lat))
            * Math.pow(Math.sin(dLon / 2), 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS * c;
  }
  function radians(degrees) {
    return degrees * Math.PI / 180;
  }
}

function top_calcultateDistance() {
  let result = 0;
  for(let i=1; i<points.length; i++) {
    result += distance(points[i-1], points[i]);
  }
  return result;
}


// #2
function trackSummary(points) {
  const totalTime = calcultateTime();
  const totalDistance = calcultateDistance();
  const pace = totalTime / 60 / totalDistance;
  return {
    time: totalTime,
    distance: totalDistance,
    pace: pace
  };

  function calcultateDistance() {
    let result = 0;
    for(let i=1; i<points.length; i++) {
      result += distance(points[i-1], points[i]);
    }
    return result;

    function distance(p1, p2) {
      const EARTH_RADIUS = 3959;
      const dLat = radians(p2.lat) - radians(p1.lat);
      const dLon = radians(p2.lon) - radians(p1.lon);
      const a = Math.pow(Math.sin(dLat / 2), 2)
              + Math.cos(radians(p2.lat))
              * Math.cos(radians(p1.lat))
              * Math.pow(Math.sin(dLon / 2), 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return EARTH_RADIUS * c;
    }
    function radians(degrees) {
      return degrees * Math.PI / 180;
    }
  }
}

function top_calcultateDistance() {
  let result = 0;
  for(let i=1; i<points.length; i++) {
    result += distance(points[i-1], points[i]);
  }
  return result;

  function distance(p1, p2) {
    const EARTH_RADIUS = 3959;
    const dLat = radians(p2.lat) - radians(p1.lat);
    const dLon = radians(p2.lon) - radians(p1.lon);
    const a = Math.pow(Math.sin(dLat / 2), 2)
            + Math.cos(radians(p2.lat))
            * Math.cos(radians(p1.lat))
            * Math.pow(Math.sin(dLon / 2), 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS * c;
  }
  function radians(degrees) {
    return degrees * Math.PI / 180;
  }
}


// #3
function trackSummary(points) {
  const totalTime = calcultateTime();
  const totalDistance = calcultateDistance();
  const pace = totalTime / 60 / totalDistance;
  return {
    time: totalTime,
    distance: totalDistance,
    pace: pace
  };

  function calcultateDistance() {
    return top_calcultateDistance(points);
  }
}

function top_calcultateDistance() {
  let result = 0;
  for(let i=1; i<points.length; i++) {
    result += distance(points[i-1], points[i]);
  }
  return result;

  function distance(p1, p2) {
    const EARTH_RADIUS = 3959;
    const dLat = radians(p2.lat) - radians(p1.lat);
    const dLon = radians(p2.lon) - radians(p1.lon);
    const a = Math.pow(Math.sin(dLat / 2), 2)
            + Math.cos(radians(p2.lat))
            * Math.cos(radians(p1.lat))
            * Math.pow(Math.sin(dLon / 2), 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS * c;
  }
  function radians(degrees) {
    return degrees * Math.PI / 180;
  }
}

// #4
function trackSummary(points) {
  const totalTime = calcultateTime();
  const totalDistance = calcultateDistance();
  const pace = (totalTime / 60) / totalDistance(points);
  return {
    time: totalTime,
    distance: totalDistance(points),
    pace: pace
  };

  function calcultateDistance() {
    return top_calcultateDistance(points);
  }
}

function totalDistance(points) {
  let result = 0;
  for(let i=1; i<points.length; i++) {
    result += distance(points[i-1], points[i]);
  }
  return result;

  function distance(p1, p2) {
    const EARTH_RADIUS = 3959;
    const dLat = radians(p2.lat) - radians(p1.lat);
    const dLon = radians(p2.lon) - radians(p1.lon);
    const a = Math.pow(Math.sin(dLat / 2), 2)
            + Math.cos(radians(p2.lat))
            * Math.cos(radians(p1.lat))
            * Math.pow(Math.sin(dLon / 2), 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS * c;
  }
  function radians(degrees) {
    return degrees * Math.PI / 180;
  }
}

// #5
function trackSummary(points) {
  const totalTime = calcultateTime();
  const totalDistance = calcultateDistance();
  const pace = (totalTime / 60) / totalDistance(points);
  return {
    time: totalTime,
    distance: totalDistance(points),
    pace: pace
  };

  function calcultateDistance() {
    return top_calcultateDistance(points);
  }
}

function totalDistance(points) {
  let result = 0;
  for(let i=1; i<points.length; i++) {
    result += distance(points[i-1], points[i]);
  }
  return result;
}

function distance(p1, p2) {
  const EARTH_RADIUS = 3959;
  const dLat = radians(p2.lat) - radians(p1.lat);
  const dLon = radians(p2.lon) - radians(p1.lon);
  const a = Math.pow(Math.sin(dLat / 2), 2)
          + Math.cos(radians(p2.lat))
          * Math.cos(radians(p1.lat))
          * Math.pow(Math.sin(dLon / 2), 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS * c;
}

function radians(degrees) {
  return degrees * Math.PI / 180;
}



// e.g. 2

/**
 * Init
 */

class Account {
  constructor(){}
  get bankCharge() {
    let result = 4.5;
    if(this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get overdraftCharge() {
    if(this.type.isPremium) {
      const baseCharge = 10;
      if(this.daysOverdrawn <= 7) 
        return baseCharge;
      else 
        return baseCharge + (this.daysOverdrawn - 7) * 0.85;
    } else 
        return this.daysOverdrawn * 1.75;
  }
}

/**
 * Refactoring
 */

// #1
 class Account {
  constructor(){}
  get bankCharge() {
    let result = 4.5;
    if(this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get overdraftCharge() {
    if(this.type.isPremium) {
      const baseCharge = 10;
      if(this.daysOverdrawn <= 7) 
        return baseCharge;
      else 
        return baseCharge + (this.daysOverdrawn - 7) * 0.85;
    } else 
        return this.daysOverdrawn * 1.75;
  }
}

class AccountType {
  constructor() {}
  
  overdraftCharge(daysOverdrawn) {
    if(this.isPremium) {
      const baseCharge = 10;
      if(daysOverdrawn <= 7) 
        return baseCharge;
      else
        return baseCharge + (daysOverdrawn - 7) * 0.85;
    } else 
      return daysOverdrawn * 1.75;
  }
}

// #2
class Account {
  constructor() {
    this.type = new AccountType();
  }
  get bankCharge() {
    let result = 4.5;
    if(this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get overdraftCharge() {
    return this.type.overdraftCharge(this.daysOverdrawn);
  }
}

class AccountType {
  constructor() {}
  
  overdraftCharge(daysOverdrawn) {
    if(this.isPremium) {
      const baseCharge = 10;
      if(daysOverdrawn <= 7) 
        return baseCharge;
      else
        return baseCharge + (daysOverdrawn - 7) * 0.85;
    } else 
      return daysOverdrawn * 1.75;
  }
}

// #3
class Account {
  constructor() {
    this.type = new AccountType();
  }
  get bankCharge() {
    let result = 4.5;
    if(this._daysOverdrawn > 0) result += this.type.overdraftCharge(this.daysOverdrawn);
    return result;
  }
}

class AccountType {
  constructor() {}
  
  overdraftCharge(daysOverdrawn) {
    if(this.isPremium) {
      const baseCharge = 10;
      if(daysOverdrawn <= 7) 
        return baseCharge;
      else
        return baseCharge + (daysOverdrawn - 7) * 0.85;
    } else 
      return daysOverdrawn * 1.75;
  }
}