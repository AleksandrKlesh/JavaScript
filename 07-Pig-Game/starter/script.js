'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  // Switching to next player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // Ternary operator
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};

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
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  // 1. Add current score to active player's score.
  scores[activePlayer] += currentScore;

  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  // 2. Check if player's score is >=100.
  if (scores[activePlayer] >= 100) {
  }
  // Finish the game

  // Switch to the next player
  switchPlayer();
});
