'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
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
  },
  order: function (starterIndex, mainIndex) {
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

const { team1, x: draw, team2 } = game.odds;

// 6

const printGoals = function (...playerName) {
  console.log(playerName, playerName.length);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7

const win =
  (Math.trunc(team1 / draw) && 'Team 1 is more likely to win!') ||
  (Math.trunc(team2 / draw) && 'Team 2 is more likely to win!');

console.log(win);
