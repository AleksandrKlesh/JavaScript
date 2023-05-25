'use strict';

/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive!');

const interface = 'Audio';
const private = 123;
const if = 321;

//Functions

function logger() {
    console.log("Hi! I'm great!")
};

//running / calling / invoking function

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `There are ${apples} apples and ${oranges} oranges`;
    return juice;
};

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/

// //Function declaration
// const age = calcAge1(1995);

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// console.log(age);

// //Function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1995);

// console.log(age, age2)

// //Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;

// const age3 = calcAge3(1991);

// console.log(age3);

//  const yearsUntilRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
//  }

//  console.log(yearsUntilRetirement(1991));

// //several parameters
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
//  }

//  console.log(yearsUntilRetirement(1991, 'Alex'));
//  console.log(yearsUntilRetirement(1980, 'Bob'));
//  console.log(12)

// // Functions calling other functions

// function cutFruitPieces (fruit) {
//     return fruit * 4;
// };

// function fruitProcessor (apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     console.log(apples, oranges);
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//     console.log(juice);
// };

// fruitProcessor(2,3);



// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

// if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
// } else {
//     console.log(`${firstName}'s alredy retired`);
//     return -1;
// };
// } 

// console.log(yearsUntilRetirement(1990, 'Alex'));
// console.log(yearsUntilRetirement(1970, 'Jim'));

// // Coding challenge 

// const calcAverage = (game0, game1, game2) => {
//     return (game0 + game1 + game2) / 3;
// }

// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);

// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         return `Dolphins win (${avgDolphins} vs ${avgKoalas})`
//     } else if (avgDolphins * 2 <= avgKoalas) {
//         return `Koalas win (${avgKoalas} vs ${avgDolphins})`
//     } else {
//         return 'Nobody wins!'
//     }
// };

// console.log(checkWinner(avgDolphins,avgKoalas));

// //Real answer

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// // const scoreDolphins = calcAverage(85, 54, 41);
// // const scoreKoalas = calcAverage(23, 34, 27);

// console.log(scoreDolphins,scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
//     } else if (avgDolphins * 2 <= avgKoalas) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
//     } else {
//         console.log('Nobody wins!')
//     }
// };

// checkWinner(scoreDolphins,scoreKoalas);

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// console.log(scoreDolphins,scoreKoalas);

// checkWinner(scoreDolphins,scoreKoalas);