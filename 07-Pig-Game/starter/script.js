'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0');
const current1El = document.getElementById('current--1');
let currentScore = 0;

// Starting conditions

score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');

const diceRoll = () => Math.trunc(Math.random() * 6 + 1);

// Rolling dicw fuctionality

btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  let dice = Number(diceRoll());
  // 2. Display dice
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden');
  console.log(dice);
  // 3. Check for rolled 1, if true switch to next player
  if (dice !== 1) {
    // Add dice to the current score
    currentScore += dice; // CHANGE LATER
    current0El.textContent = currentScore;
  } else {
    // Switching to next player
    current0El.textContent = 0;
    console.log('The opponent turn!');
  }
});
