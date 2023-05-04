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

//function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age = calcAge1(1995);

console.log(age);

//function expression

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1995);

console.log(age, age2)