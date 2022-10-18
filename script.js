'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; // Generator nahodneho celeho cisla
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayMessageWithScore = function (message) {
  displayMessage(message);
  score--;
  document.querySelector('.score').textContent = score;
};

const winnerStyle = function () {
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('header').style.borderBottom = '7px solid #60b347';
  document.querySelector('.number').style.backgroundColor = '#60b347';
};

// Herna logika -----------------------------------------------------------------
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No numbeeeer!');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    winnerStyle();

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      displayMessageWithScore('Too high!');
    } else {
      displayMessage('We lost the game !');
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      displayMessageWithScore('Too low!!');
    } else {
      displayMessage('We lost the game !');
    }
  }
});

// Tlacidlo AGAIN
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style = '';
  document.querySelector('.number').style.width = '';
  document.querySelector('header').style.borderBottom = '';
  document.querySelector('.number').style.backgroundColor = '';
});
