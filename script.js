'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1; // Generator nahodneho celeho cisla

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.message').textContent = secretNumber; // zobrazenie cisla

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No numbeeeer!');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
  } else if (guess > secretNumber) {
    displayMessage('Too high!');
  } else if (guess < secretNumber) {
    displayMessage('Too low!');
  }
});
