'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; // Generator nahodneho celeho cisla
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const lostGame = function (message) {
  document.querySelector('.message').textContent = message;
};

// zobrazenie cisla
document.querySelector('.message').textContent = secretNumber;

// Herna logika
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No numbeeeer!');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
  } else if (guess > secretNumber) {
    if (score > 1) {
      displayMessage('Too high!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      lostGame('We lost the game !');
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      displayMessage('Too low!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      lostGame('We lost the game !');
    }
  }
});
