// 'use strict';

//////////////////////////// Default parameters ////////////////////////////

const bookings = [];

const createBooking = function (
  flightNum,
  numPassenger = 1, // ES6 short circuiting
  price = 299 * numPassenger
) {
  // ES5 features using short circuiting
  //   numPassenger = numPassenger || 1;
  //   price = price || 299;
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 3);
createBooking('LH123', undefined, 1000);

// Closer look at functions

const flight = 'LH210';
const alex = {
  name: 'Alex Kl',
  passport: 783297409,
};

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;
//   if (passenger.passport === 783297409) {
//     alert('You checked in!');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flight, alex);

// console.log(flight);
// console.log(alex);

// Same as this one ...

// const flightNum = flight;
// const passenger = alex;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// newPassport(alex);
// checkIn(flight, alex);

// console.log(alex);

console.log(message);
let message = 'Hello';


// TEST