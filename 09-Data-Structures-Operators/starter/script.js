'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

///////////////////////////// ES 6 features ////////////////////////////

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //////////////////// ES6 enhanced object literals ///////////////////
  openingHours,

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Destructuring an object which is passed with a function call

  deliveryOrder: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '22:00',
    address,
  }) {
    console.log(
      `Order received! ${[this.starterMenu[starterIndex]]} and ${[
        this.mainMenu[mainIndex],
      ]} will be delivered to ${address} at ${time}.`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`You ordered pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// ///////////////////// DESTRUCTURING OBJECTS//////////////////////////

// restaurant.deliveryOrder({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.deliveryOrder({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });
// // Destructuring objects with the same names
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // Destructuring and creating new variables
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, openingHours, tags);

// // Destructuring and assigning a default value

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
// // Mutating variables

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// // Wrap the destructuring assignment into parenthesis!!!
// ({ a, b } = obj);
// console.log(a, b);

// // Destructuring nested objects

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// // Destructuring

// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// // Skip the third
// const [first, second, , fourth] = restaurant.categories;

// console.log(first, second, fourth);

// let [main, secondary] = restaurant.categories;
// console.log('Main:', main, 'Secondary:', secondary);

// // Switching variables

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // Destructuring switching variables
// [main, secondary] = [secondary, main];

// console.log(main, secondary);

// // Receive 2 values from a function
// const [starterCourse, mainCourse] = restaurant.order(2, 0);
// console.log(starterCourse, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

////////////////////////// Spread operator ... ////////////////////////////

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2], 3];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr, 3];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array

// const mainMenuCopy = [...restaurant.mainMenu];

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables: all arrays, strings, maps, sets, but ❌NOT objects.

// const str = 'Alex';
// let letters = [...str, ' ', 'S.'];
// console.log(letters);

// Cannot be used with template literal
// console.log(`${...str}`);

// Real-world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects

// const newRestaurant = {
//   foundIn: 1998,
//   ...restaurant,
//   founder: 'Guiseppe',
//   foundIn: 1998,
// };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy);
// console.log(restaurant);

/////////////////////////// REST operator ... ///////////////////////////////
// SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// // REST, because on left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekDays } = { ...restaurant.openingHours };
// console.log(sat, weekDays);

// const add = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];

//   console.log(sum);
// };

// add(1, 2);
// add(1, 2, 3, 4, 5);
// add(0, 9, 8, 7, 6, 5, 4, 3, 2, 1);

// const x = [23, 5, 7];

// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

////////////////////// Short circuiting with logical operators && and || //////////////////////////

// console.log('----- OR -----');

// console.log(3 || 'Alex');
// console.log('' || 'Alex');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('----- AND -----');
// console.log(0 && 'Alex');
// console.log(7 && 'Alex');

// console.log('Hello' && 23 && null && 'Alex');

// // Practical example

// if (('mushrooms', 'spinach')) {
//   restaurant.orderPizza;
// }

// restaurant.orderPizza && restaurant.orderPizza('musrooms', 'spinach');

/////////////////// The nullish coalescing operator (ES2020) ////////////////////

// Nullish: null, undefined (not 0 or '')

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

/////////////////// Logical assignment operators ||= &&= (ES 2021) /////////////////////

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// //           OR aasignment operator

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// //           Nullish assignment operator (null of undefined)

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// //           AND assignment operator
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

//////////////////////// Coding challenge 1 ///////////////////////////

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1

const [...players1] = game.players[0];
const [...players2] = game.players[1];

// 2

const [gk, ...fieldPlayers] = players1;

// 3

const [...allPlayers] = [...players1, ...players2];

// 4

const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5

// const { team1, x: draw, team2 } = game.odds;
const {
  odds: { team1, x: draw, team2 },
} = game;

// 6

const printGoals = function (...playerName) {
  console.log(playerName, playerName.length);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7

// const win =
//   (Math.trunc(team1 / draw) && 'Team 1 is more likely to win!') ||
//   (Math.trunc(team2 / draw) && 'Team 2 is more likely to win!');

team1 > team2 && console.log('Team 2 is more likely to win!');
team1 < team2 && console.log('Team 1 is more likely to win!');

// console.log(win);

/////////////////////// For-of loop //////////////////////////

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// for (const item of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`);

// Destructuring in for-of loop

for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);

console.log([...menu.entries()]);

////////////////////////// Optional chaining (?.) ES2020 /////////////////////////////

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// WITH optional chaining

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  const open =
    restaurant.openingHours[day]?.open ?? `The restaurant closed on ${day}`;
  console.log(`On ${day} we open at ${open}`);
}

// Method

console.log(restaurant.order?.(0, 1) ?? 'Order does not exists');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Order does not exists');

// Arrays

const users = [{ name: 'Alex', email: 'hello@gmail.com' }];

// const users = [];
console.log(users[0]?.name ?? 'User array empty');

////////////////////////// LOOPING over Objects ///////////////////////////

// Properties NAMES
const properties = Object.keys(openingHours);
console.log(properties);
console.log(`We open ${properties.length} days a week`);

let openStr = `We are open ${properties.length} days a week:`;
for (const day of properties) openStr += `${day}, `;
console.log(openStr);

// Property VALUES

const values = Object.values(openingHours);
console.log(values);

for (const canVisit of values) console.log(canVisit);

// Loop over entire Object (with destructuring)

const entries = Object.entries(openingHours);
console.log(openingHours);

for (const [key, { open, close }] of entries)
  console.log(`On ${key} we open at ${open} and close at ${close}`);

////////////////////////// Coding challenge 2 ///////////////////////////////

// 1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player} `);
}
// for (let i = 0; i < game.scored.length; i++) {
//   console.log(`Goal ${i + 1}: ${game.scored[i]} `);
// }

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  console.log(odd);
  average += odd;
}
average /= odds.length;
console.log(average);

// 3.
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// 4.
// Bonus:Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//      {
//        Gnarby: 1,
//        Hummels: 1,
//        Lewandowski: 2
// }

const scorers = {};
// const names = game.scored.entries();
// let j = 1;
// // const [i, names] = game.scored.entries();
// for (const [i, name] of names) {
//   if (!scorers[`${name}`]) {
//     scorers[`${name}`] = j;
//   } else {
//     scorers[`${name}`] = j + 1;
//   }
//   console.log(i, name);
// }

//////////// Real solution ///////////
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  // console.log(scorers);
}
console.log(scorers);

/////////// Practice /////////////
const a = {};

for (const b of game.scored) a[b] ? a[b]++ : (a[b] = 1);

console.log(a, 'THis is a');

/////////////////////////////////// Sets (unique values) ///////////////////////////////////

const orderSet = new Set(['Pizza', 'Pasta', 'Spagetti', 'Pizza', 'Pizza']);
console.log(orderSet);

console.log(orderSet.add('Bread'));
console.log(orderSet.delete('Bread')); // Boolean true
console.log(orderSet);
console.log(orderSet.has('Pasta')); // Boolean true
console.log(orderSet.size); // 3
console.log(orderSet.values());
console.log(orderSet.clear()); // undefined
console.log(orderSet); // 0 elements in the Set

// Creating Set from an array
const staff = ['Manager', 'Waiter', 'Waiter', 'Chef', 'Chef'];
const staffUnique = [...new Set(staff)];

console.log(staffUnique);

// How many unique positions there are
console.log(new Set(['Potato', 'Carrot', 'Cucumber', 'Potato', 'Carrot']).size);

// How many letters in the string
console.log(new Set('Hello world!').size);

///////////////////////////// Maps ///////////////////////////////

const rest = new Map();
rest.set('name', 'Classico Italiano');
console.log(rest.set(1, 'Firenze, Italy'));
rest.set(2, 'Lisbon, portugal');

console.log(rest);

// Chaining Maps

rest
  .set('categories')
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

// Get method

console.log(rest.get('open'));
console.log(rest.get(true));

const time = 11;
console.log(rest.get(time >= rest.get('open') && time < rest.get('close')));

// Has method

console.log(rest.has('categories'));

// Delete method

console.log(rest.delete(2));
console.log(rest);

// Size property. NOT a function

console.log(rest.size);

// Clear method

// rest.clear();
console.log(rest);

// Using arrays as keys in Maps

const arr = [1, 2];
// rest.set([1, 2], 'Test');  // 1. [1, 2]
// console.log(rest.get([1, 2])); // 2. Doesn't work because in the heap [1, 2] and [1, 2] are different objects in the heap

rest.set(arr, 'Test'); // 1. This should
console.log(rest.get(arr)); // 2. work!

rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);

// Instead of .set method (adding to Map)

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavsScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Incorrect, try again'],
]);

console.log(question);

console.log(Object.entries(openingHours));

// Easy way to convers Object into Array

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quzz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
const answer = 3;
// const answer = Number(prompt('Your answer:'));
console.log(answer);

// Getting access to the boolean key in the Map

// if (answer === question.get('correct')) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

console.log(question.get(question.get('correct') === answer));

// Converting Map to Array

console.log([...question]);

console.log([...question.values()]);
console.log([...question.keys()]);
console.log([...question.entries()]);

///////////////////////////////// Coding challenge 3 /////////////////////////////////

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = new Set(gameEvents.values());
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.

// My solution

// const arrAvg = [...gameEvents.keys()];
// // const avgTime = Math.trunc(arrAvg[arrAvg.length - 1] / gameEvents.size);
// // console.log(`An event happened, on average, every ${avgTime} minutes`);

// Different solution
const lastEvent = [...gameEvents.keys()].pop(); // pop() method deletes and returns the value of the last element
const avgTime = Math.trunc(lastEvent / gameEvents.size);
console.log(`An event happened, on average, every ${avgTime} minutes`);

// 4.

// My solution

// for (const [key, value] of gameEvents.entries()) {
//   let half = 0;
//   key <= 45 ? (half = 'FIRST') : (half = 'SECOND');
//   console.log(`[${half} HALF] ${key}: ${value}`);
// }

// Different solution

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

/////////////////////////////////// String methods ///////////////////////////////

const airLine = 'Viet Jet Air';
const plane = 'A320';

console.log(airLine[0]);
console.log(airLine[1]);
console.log(airLine[2]);
console.log('BDBD'[1]);

console.log(airLine.length);
console.log(plane.length);

// IndexOf method

console.log(airLine.indexOf('e'));
console.log(airLine.lastIndexOf('e'));
console.log(airLine.indexOf('Jet'));

// Slice method

console.log(airLine.slice(5));
console.log(airLine.slice(0, 4));

console.log(airLine.slice(0, airLine.indexOf(' ')));
console.log(airLine.slice(airLine.indexOf(' '), airLine.lastIndexOf(' ')));
console.log(airLine.slice(airLine.indexOf(' ') + 1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log(`You got a middle seat!`);
  else console.log(`You got lucky!`);
};

checkMiddleSeat('11B');
checkMiddleSeat('13C');
checkMiddleSeat('20E');

console.log(new String('Alex'));
console.log(typeof new String('Alex'));
console.log(typeof new String('Alex').slice(1));

// Upper, lower case methods

console.log(airLine.toUpperCase());
console.log(airLine.toLowerCase());

const passenger = 'aLeX';
const lowerPassenger = passenger.toLowerCase();
const correctPassenger =
  lowerPassenger[0].toUpperCase() + lowerPassenger.slice(1);

console.log(correctPassenger);

// Comparing emails
