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

// Arrays

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2022);

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends.length - 1);

// friends[2] = 'Jay';
// console.log(friends)

// const firstName = 'Alex';
// const alex = [firstName, 'Kl', 2037 - 1993, 'teacher', friends];
// console.log(alex);
// console.log(alex.length);

// // Exercise

// const calcAge = function (birthYear) {
//         return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];
// console.log(calcAge(years));

// const age1 = 2037 - years[0];
// const age2 = 2037 - years[1];
// const age3 = 2037 - years[years.length - 1];

// console.log(age1, age2, age3);

// const ages = [2037 - years[0], 2037 - years[1], 2037 - years[years.length - 1]];

// console.log(ages);

// const friends = ['Michael', 'Steven', 'Peter'];

// // Add elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// const newLength1 = friends.unshift('John');
// console.log(friends);
// console.log(newLength1);

// // Remove elements

// friends.pop(friends); // Last
// const popped = friends.pop();

// console.log(friends);
// console.log(popped);

// friends.shift();  // First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);

// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if (friends.includes('Peter')) {
//     console.log('You have a friend called Peter')
// } else {
//     console.log('You do not have friend called Peter');
// };

// Coding challenge #2

// const tip = function calcTip(bill) {
//     if (bill >= 50 && bill <= 300) {
//         return bill * 0.15;
//     } else {
//         return bill * 0.2;
//     }
// };

// console.log(tip(10));
// const bills = [125, 555, 44];

// const tips = [tip(bills[0]),
//               tip(bills[1]), 
//               tip(bills[bills.length - 1])];
// console.log(tips);

// const total = [bills[0] + tips[0],
//                bills[1] + tips[1],
//                bills[bills.length - 1] + tips[tips.length - 1]];
// console.log(total);

// // Real answer

// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(calcTip(10));
// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]),
//               calcTip(bills[1]), 
//               calcTip(bills[bills.length - 1])];
// console.log(tips);

// const total = [bills[0] + tips[0],
//                bills[1] + tips[1],
//                bills[bills.length - 1] + tips[tips.length - 1]];
// console.log(total);

// // Objects

// const alexArray = [
//     'Alex',
//     'kl',
//     2037 - 1993,
//     'teacher',
//     ['Michael', 'Jim', 'Steven']
// ];

// const  alex = {
//     firstName: 'Alex',
//     secondName: 'Kl',
//     age: 2037 - 1993,
//     job: 'teacher',
//     friens: [alexArray[alexArray.length - 1]]
// };

// console.log(alex);

// const  alex = {
//     firstName: 'Alex',
//     lastName: 'Kl',
//     age: 2037 - 1993,
//     job: 'teacher',
//     friends: ['Michael', 'Jim', 'Steven']
// };

// console.log(alex.friends);
// console.log(alex[`firstName`]);

// const nameKey = 'Name';
// console.log(alex[`first` + nameKey]);
// console.log(alex[`last` + nameKey]);

// // const interestedIn = prompt('What do you want to know about Alex? Choose between firstName, lastName, age, job and friends.');
// // console.log(interestedIn);

// // if (alex[interestedIn]) {
// //     console.log(alex[interestedIn]);
// // } else {
// //     console.log('Wrong request. Choose between firstName, lastName, age, job and friends.')
// // };

// alex.location = 'Portugal';
// alex['twitter'] = '@alexkl';

// console.log(alex);

// // // Challenge
// // // Jonas has 3 friends, and his best friend is called Michael.

// console.log(`${alex.firstName} has ${alex.friends.length} friends, and his best friend is called ${alex.friends[0]}`);

// const  alex = {
//     firstName: 'Alex',
//     lastName: 'Kl',
//     birthYear: 1993,
//     job: 'teacher',
//     friends: ['Michael', 'Jim', 'Steven'],
//     hasDriversLicence: true,

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }

//     // calcAge: function () {
//     //     console.log(this);
//     //     return 2037 - this.birthYear;
//     // }

//     calcAge: function () {
//         console.log(this);
//         this.age = 2037 - this.birthYear;
//         return this.age
//     },

//     getSummary: function () {
//         return `${this.firstName} is ${this.age} years old ${this.job}, and  he has ${this.hasDriversLicence ? 'a' : 'no'} driver's licence.`;
//     }

// };

// console.log(alex.calcAge());
// console.log(alex.age);
// // console.log(alex['calcAge']());

// // // "Alex is 44 years old teacher, and he has a driving licence"

// console.log(alex.getSummary());

// // Coding challenge

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.BMI = this.mass / (Math.pow(this.height, 2));
//         return this.BMI = this.BMI.toFixed(2)    
//     }
// };

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.BMI = this.mass / (Math.pow(this.height, 2));
//         return this.BMI = this.BMI.toFixed(2);
//     }
// };

// const compare = () => { 
//              return mark.calcBMI() < john.calcBMI() ? 'higher than'
//                     : mark.calcBMI() > john.calcBMI() ? 'lower than'
//                     : 'equal to';
// };

// //John's BMI (28.3) is higher than Mark's (23.9)!

// console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is ${compare()} ${mark.fullName}'s (${mark.calcBMI()})`);


// // Real answer

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi 
//     }
// };

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi 
//     }
// };

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s (${mark.bmi}) BMI is higher than ${john.fullName} (${john.bmi})`);
// } else if (john.bmi > mark.bmi) {
//     console.log(`${mark.fullName}'s (${mark.bmi}) BMI is lower than ${john.fullName} (${john.bmi})`);
// }

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

// for(let rep = 1; rep <= 10; rep++ ){
//     console.log('Lifting weights repetition' + rep);
// };

// const alex = [
//     'Alex',
//     'kl',
//     2037 - 1993,
//     'teacher',
//     ['Michael', 'Jim', 'Steven'],
//     true
// ];

// const types = [];

// for(let i = 0; i < alex.length; i++) {
//     // Reading from alex array
//     console.log(alex[i], typeof alex[i]);

//     // Filling types array
//     // types[i] = typeof alex[i];

//     types.push(typeof alex[i]);
// };

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for(let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// };

// console.log(ages);

// // Continue and break

// console.log('--- ONLY STRINGS ---');

// for(let i = 0; i < alex.length; i++) {
//     if (typeof alex[i] !== 'string') continue;

//     console.log(alex[i], typeof alex[i]);
// };

// console.log('--- BREAK WITH NUMBERS ---');

// for(let i = 0; i < alex.length; i++) {
//     if (typeof alex[i] === 'number') break;

//     console.log(alex[i], typeof alex[i]);
// };

// const alex = [
//     'Alex',
//     'kl',
//     2037 - 1993,
//     'teacher',
//     ['Michael', 'Jim', 'Steven'],
// ];

// for(let i = alex.length - 1; i > -1; i--) [
//     console.log(alex[i]);
// ];

// // for(let exercise = 1;  exercise < 4; exercise++) {
// //     console.log(`-------- Starting exercise ${exercise}`);

// //     for(let rep = 1; rep < 5; rep++) {
// //         console.log(`Exercise ${exercise} --- Lifting weight repetition ${rep}`);
// //     }
// // };

// // for(let rep = 1; rep < 5; rep++) {
// //     console.log(`Exercise ${exercise} --- Lifting weight repetition ${rep}`)
// // }

// let rep = 1;
// while(rep < 10) {
//     console.log(`While loop repetition ${rep}`);
//     rep++;
// };

// let dice = Math.round(Math.random() * 10);
// console.log(dice);
// if (dice === 10) {
//     console.log('The dice equals 10!!! You are the winner!')
// }

// while(dice !== 10) {
//     console.log(`The dice is ${dice}`);
//     dice = Math.round(Math.random() * 10);
//     if (dice === 10) {
//         console.log('The dice equals 10!!! You are the winner!')
//     }
// };

// let dice = Math.trunc(Math.random() * 10) + 1;
// console.log(dice);

// while(dice !== 10) {
//     console.log(`The dice is ${dice}`);
//     dice = Math.trunc(Math.random() * 10) + 1;
//     console.log(dice);
// };

// if (dice === 10) {
//     console.log('You rolled 10!!! You are the winner!')
// };

// // Coding challenge

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

// for(let i = 0; i < bills.length; i++) {
//     tips[i] = calcTip(bills[i]);
//     console.log(bills[i], tips[i], totals[i]);
//     totals[i] = bills[i] + tips[i];
//     console.log(bills[i], tips[i], totals[i]);

// };

// const calcAverage = function (arr) {
//     let sum = 0;
//     for(let j = 0; j < arr.length; j++) {
//         sum = (sum + arr[j]);
//         console.log(`----- calcAverage ----- ${sum}`);
//     };
//     console.log(sum);
//     return sum / (arr.length);
//     console.log(average);

// };

// const average = calcAverage(totals);

// console.log(bills, tips, totals, `The average is  ${average}`);

// // Real answer

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

// for(let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }

// const calcAverage = function (arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / (arr.length);
// }

// const average = calcAverage(totals);

// console.log(bills, tips, totals, `The average is  ${average}`);
// console.log(calcAverage(totals));

