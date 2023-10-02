'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age} years old, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Tim';
      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';
      const str = `Oh, also you're millenial, ${firstName}!`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      console.log(output);
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Alex';
calcAge(1991);
