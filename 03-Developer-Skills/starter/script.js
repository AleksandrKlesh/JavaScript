// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';

// const calcAge = birthYear => 2037 - birthYear;
// console.log(calcAge(1991));

// PROBLEM: we work for a company building a smart home thermometer. our most recent task is this: "Given an array of temperatures of a day, calculate the temperature amplitude. keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// // 1. Understanding problem
// // - What is temp amplitude? Answer: difference between highest and lowest temp.
// // - How to compute max and min temperatures? Answer:
// // - What's a sensor error? And what to do?

// // 2. Breaking up into sub-problems
// // - How to ignore errors?
// // - Find max value in temp array
// // - Find mix value in temp array
// // - Subtruct min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// // PROBLEM 2
// // Function should now receive 2 arrays of temperatures

// // 1. Understanding problem
// // - With 2 arrats should we implement the functionality twice? NO! Just merge 2 arrays

// // 2. Breaking up into sub-problems
// // - Merge 2 arrays?

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([1, 2, 3], [3, 4, 5]);
// console.log(amplitudeNew);

// // Debugging

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',

//     // C) FIX
//     // value: Number(prompt('Degrees celsius:')),
//     value: 10,
//   };
//   //   console.log(measurement.value);
//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);

//   // B) FIND
//   console.table(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // A) IDENTIFY
// console.log(measureKelvin());

// // // Using a debugger

// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     debugger;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// // A) IDENTIFY

// console.log(amplitudeBug);

// // CODING CHALLENGE

// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."

// 1. Ask right questions.
// - What to make? Answer: a thermometer.
// - What does it do? It displays/prints a string with the given temperatures? "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
// - WHere does the
// - What are the values of the array(forecasted maximum temperatures)? [17, 21, 23]
// - How many days do the temperatures got measured? Unknown

// 2. Sub-problems.
// - Create an array of forecasted maximum temperatures.
// - Log the result.
// - How to display a string with the given temperatures? Create variable forecast. Template literals + forecast itself. PUSH METHOD.
// - How to count the amount of days temperatures got measured? Create a loop.
// - Create a function which takes an array as temps.

const temperatures = [17, 21, 23];
const temperaturesNew = [12, 5, -5, 0, 4];

const printForecast = function (temps) {
  let thermometer = [];
  let forecast = '';
  for (let days = 0; days < temps.length; days++) {
    thermometer.push(`... ${temps[days]} in ${days + 1} days `);
    forecast += `${thermometer[days]}`;
  }
  return forecast;
};

console.log(printForecast(temperatures));
console.log(printForecast(temperaturesNew));

// A. Idenfify the bug.
// - temps[days + 1]
// let thermometer = thermometer +
// return thermometer inside the for loop
// define 'thermometer' before the for loop
// days < temps.length

// CODING CHALLENGE: ANSWER

// TEST DATA1:[17, 21, 23];
// TEST DATA1:[12, 5, -5, 0, 4];

// 1. Understanding the problem.
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]} ... ${data1[1]} ... ${data1[2]} ...`);

const printForecastNew = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} days ... `;
  }
  console.log('... ' + str);
};

printForecastNew(data1);
printForecastNew(data2);
