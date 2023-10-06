'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     let output = `${firstName}, you are ${age} years old, born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Tim';
//       // Reassigning outer scope's variable
//       output = 'NEW OUTPUT!';
//       const str = `Oh, also you're millenial, ${firstName}!`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       console.log(output);
//     }
//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Alex';
// calcAge(1991);

// Hoisting

// Variables

// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Alex';
// let job = 'teacher';
// const year = 1991;

// // Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// Example
// console.log(numProducts);

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log(this);

// function calcAge(birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// }

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1980);

// const alex = {
//   year: 1991,
//   calcAge: function () {
//     console.log(2037 - this.year);
//     console.log(this);
//   },
// };

// alex.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = alex.calcAge;
// matilda.calcAge();

// const f = alex.calcAge;
// f();

// const alex = {
//   firstName: 'Alex',
//   year: 1991,
//   calcAge: function () {
//     console.log(2037 - this.year);
//     // console.log(this);

//     // Solution 1 - regular function

//     // const self = this; // use self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     //   //   console.log(this.year >= 1981 && this.year <= 1996);
//     // };
//     // isMillenial();

//     // Solution 2 - arrow function
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//       //   console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => {
//     console.log(`Hi ${this.firstName}`);
//     // console.log(this);
//   },
// };

// alex.greet();
// alex.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5);
// addExpr(2, 5, 8, 10);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5, 9);

// PRIMITIVE types and REFERENCE types

// Primitive types (call stack)
// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// // Reference types (heap)
// const me = {
//   name: 'ALex',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;

// console.log('Friend:', friend);
// console.log('Me:', me);

// Primitive types

// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';

// console.log(lastName, oldLastName);

// // Reference types
// const jessica = {
//   name: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';

// console.log('Before marrige:', jessica);
// console.log('After marrige:', marriedJessica);

// // Coping objects

// const jessica2 = {
//   name: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };

// const jessicaCopy = Object.assign({}, jessica2);

// jessicaCopy.lastName = 'Davis';

// jessicaCopy.family.push('Tim');
// jessicaCopy.family.push('Mary');

// console.log('Before marrige:', jessica2);
// console.log('After marrige:', jessicaCopy);
