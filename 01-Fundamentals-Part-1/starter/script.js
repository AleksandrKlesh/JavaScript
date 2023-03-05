/*

let js = 'amazing';

console.log(40+8+23-10);
console.log('Alex');
console.log(23);

let firstName = "Alexander";
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

let alex_alexander = "AA";
let $function = 27;
let name = "Alex";

let person = "Alexander";

let PI = 3.1415;
console.log(PI);

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);

console.log(true);

let javascriptIsFun = true;

console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Alex');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun)

let year;
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(null);
console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990;

const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Kl';
console.log(lastName);


//Math operators

const now = 2037;
const ageAlex = now - 1995;
const ageMasha = now - 2019;
console.log(ageAlex, ageMasha);
console.log(ageAlex * 2, ageMasha / 10, 2 ** 3);
// two to the power of three 2 ** 3 = 2 * 2 * 2 = 8

const firstName = 'Alex';
const lastName = 'Kl';
console.log(firstName + ' ' + lastName);

//Assignment operators
let x = 10 + 5; //15
x += 10; //x = x + 10
x **= 2;
x ++;
x --;
x --;
console.log(x);

//Comparison operators

console.log(ageAlex > ageMasha);
console.log(ageMasha >= 18);

const isFullAge = ageMasha >= 18;
console.log(isFullAge);

console.log(now - 1991 > now - 2018);

const now = 2037;
const ageAlex = now - 1995;
const ageMasha = now - 2019;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageAlex + ageMasha) / 2;
console.log(ageAlex, ageMasha, averageAge);


const weightMark = 78;
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.95;

const weightMark = 95;
const heightMark = 1.88;
const weightJohn = 85;
const heightJohn = 1.76;

//const markHigherBMI = weightMark / heightMark ** 2 > weightJohn / heightJohn ** 2;

const markBMI = weightMark / heightMark ** 2;
const johnBMI = weightJohn / heightJohn ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

const firstName = 'Alex';
const job = 'teacher';
const birthYear = 1995;
const year = 2037;

const alex = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(alex);

const newAlex = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(newAlex);

console.log(`Just a regular string`);

console.log('String with\n\
multiple\n\
lines');

console.log(`String with
multiple
lines`);


const age = 19;
// const isOldEnough = age >= 18;

if(age >= 18){
    console.log('Sarah can start driving licence 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 2001;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
};

console.log(`Born in ${century}th century`); 

// const weightMark = 78;
// const heightMark = 1.69;
// const weightJohn = 92;
// const heightJohn = 1.95;

const weightMark = 95;
const heightMark = 1.88;
const weightJohn = 85;
const heightJohn = 1.76;

//const markHigherBMI = weightMark / heightMark ** 2 > weightJohn / heightJohn ** 2;

const markBMI = weightMark / heightMark ** 2;
const johnBMI = weightJohn / heightJohn ** 2;

// const markHigherBMI = markBMI > johnBMI;
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${Number.parseFloat(markBMI).toFixed(1)}) is higher that John's(${Number.parseFloat(johnBMI).toFixed(1)})`);
} else {
    console.log(`John's BMI (${Number.parseFloat(johnBMI).toFixed(1)}) is higher that Mark's(${Number.parseFloat(markBMI).toFixed(1)})`);
}

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Alex'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion

console.log('I am ' + 23 + ' years old');
console.log('23' - 3 - '10');
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1;
n = n - 1; //10
console.log(n);

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 100;
if (money) {
    console.log("Don't spend it all!");
} else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log('YAY! Height is defined!');
} else {
    console.log('Height is UNDEFINED');
}
//IF ELSE

const age = 18;
if (age === 18) console.log('You just became an adult! (string)');

if (age == 18) console.log('You just became an adult! (loose)');
console.log("HI")

const favourite = Number (prompt("What's your favourite number?"));
console.log(typeof Number(favourite));
console.log(typeof favourite);

if (favourite === 23) {
    console.log("Cool! 23 is a great number!")
} else if ( favourite === 7) {
    console.log("7 is a cool number too!")
} else if (favourite === 9) {
    console.log("9 is a cool number too!")
} else {
    console.log("Number is not 23 or 7 or 9")
}

if (favourite !== 23) console.log("Why not 23?!")

//Logical operators

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive...')
// };

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive...')
};

*/

// § Data 1: Dolphins score 96, 108 and 89. 
// Koalas score 88, 91 and 110
// // § Data Bonus 1: Dolphins score 97, 112 and 101. 
// Koalas score 109, 95 and 123 
// // § Data Bonus 2: Dolphins score 97, 112 and 101. 
// Koalas score 109, 95 and 106

// const avgDolphins = (96 + 108 + 89) / 3;
// const avgKoalas = (88 + 91 + 110) / 3;

// console.log(avgDolphins);
// console.log(avgKoalas);


// if (avgDolphins > avgKoalas) {
//     console.log('Dophins win!!!');
// } else if (avgDolphins < avgKoalas) {
//     console.log('Koalas win!!!');
// } else {
//     console.log("It's a draw!!!");
// };

// // 1
// const avgDolphins = (96 + 100 + 89) / 3;
// const avgKoalas = (88 + 91 + 110) / 3;

// // 2
// const avgDolphins = (97 + 112 + 101) / 3;
// const avgKoalas = (109 + 95 + 123) / 3;

// 3
// const avgDolphins = (97 + 112 + 101) / 3;
// const avgKoalas = (109 + 95 + 106) / 3;


// const avgDolphins = (99 + 100 + 100) / 3;
// const avgKoalas = (99 + 100 + 100) / 3;

// console.log(avgDolphins);
// console.log(avgKoalas);

// const minScoreDolphins = avgDolphins >= 100;
// const minScoreKoalas = avgKoalas >= 100;


// if ((avgDolphins > avgKoalas) && (minScoreDolphins && minScoreKoalas)) {
//     console.log('Dophins win!!!');
// } else if ((avgDolphins < avgKoalas) && (minScoreKoalas && minScoreDolphins)) {
//     console.log('Koalas win!!!');
// } else if (!minScoreDolphins && !minScoreKoalas) {
//     console.log("Teams don't have enouth points!!!");
// } else if (!minScoreDolphins && minScoreKoalas) {
//     console.log("Dolphins have less than 100 points!!!");
// } else if (!minScoreKoalas && minScoreDolphins) {
//     console.log("Koalas have less than 100 points!!!");
// } else {
//     console.log("It's a draw!!!");
// };

// // 1
// const avgDolphins = (96 + 100 + 89) / 3;
// const avgKoalas = (88 + 91 + 110) / 3;

// 2
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;

// 3
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;


// const scoreDolphins = (99 + 100 + 100) / 3;
// const scoreKoalas = (99 + 100 + 100) / 3;


// console.log(scoreDolphins, scoreKoalas);


// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log('Dophins win!!!');
// } else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
//     console.log('Koalas win!!!');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log("It's a draw");
// } else {
//     console.log("Nobody wins!!!");
// };

//Switch

// const day = 'monday'

// switch(day){
//     case 'monday':
//         console.log('doing coding');
//         break;
//     case 'tuesday':
//         console.log('listening');
//         break;
//     case 'wednesday':
//         console.log('walking');
//         break;
//     case 'thursday':
//         console.log('practice');
//         break;    
//     case 'friday':
//         console.log('planning weekend');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('enjoying the weekend');
//         break;
//     default:
//         console.log('Not a valid day!!!');
// };

// if (day === 'monday') {
//     console.log('doing coding')
// } else if (day === 'tuesday') {
//     console.log('listening')
// } else if (day === 'wednesday') {
//     console.log('walking')
// } else if (day === 'thursday') {
//     console.log('practice')
// } else if (day === 'friday') {
//     console.log('planning weekend')
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('enjoying the weekend')
// } else {
//     console.log('Not a valid day!!!');
// };

//Statements and expressions

// 3 + 4
// 1991
// true && false && !false

// if (24 > 10) {
//     const str = '24 is bigger'
// }

// const me = 'Alex';

// console.log(`I'm ${2037 - 1991} years old ${me}`)

//conditional (ternary) operator

// const age = 18;

// // age >= 18 ? console.log('Wine'):
// // console.log('Water');

// const drink = age >= 18 ? 'Wine' : 'Water';
// console.log(drink);

// let drink2;

// if (age >= 18) {
//     console.log('Wine');
// } else {
//     console.log('Water');
// };

// console.log(`I like to drink ${age >= 18 ? 'Wine' : 'Water'}`);

//coding challenge #4

// //1
// const bill = 275;
// //2
// const bill = 40;
//3
// const bill = 430; 

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 :
// bill * 0.2;

// console.log(`Your bill is ${bill}
// Your tip is ${tip}
// Your final bill is ${bill + tip}`);