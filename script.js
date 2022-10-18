'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; // Generator nahodneho celeho cisla
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const winnerStyle = function () {
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('header').style.borderBottom = '7px solid #60b347';
  document.querySelector('.number').style.backgroundColor = '#60b347';
};

document.querySelector('.number').textContent = secretNumber; // zobrazene nahodne cislo

// Herna logika
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMessage('No numbeeeer!');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    winnerStyle();
  } else if (guess > secretNumber) {
    if (score > 1) {
      displayMessage('Too high!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('We lost the game !');
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      displayMessage('Too low!!');
      score--;
      document.querySelector('.score').textContent = score;
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
