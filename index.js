// ['Sally', 'Bob', 'Freddy', 'Claudia']

const returnFirstTwoDrivers = function(array){ let oldArray = Object.assign([],array); let newArray = []; for (let i = 0; i < 2; i++) {newArray.push(oldArray[i]);} return newArray; };

const returnLastTwoDrivers = function(array){ let oldArray = Object.assign([],array); let newArray = []; for (let i = 0; i < 2; i++) {newArray.unshift(oldArray.pop());} return newArray; }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) { return function(fare) { return fare * int } }

// function fareDoubler(fare) { return fare * 2 }
// function fareDoubler(fare) { return createFareMultiplier(2)(fare) }
// const fareDoubler = (fare) => { return createFareMultiplier(2)(fare) }
const fareDoubler = createFareMultiplier(2)

// function fareTripler(fare) {return fare * 3 }
// function fareTripler(fare) { return createFareMultiplier(3)(fare) }
// const fareTripler = (fare) => { return createFareMultiplier(3)(fare) }
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array, func) { return func(array) }