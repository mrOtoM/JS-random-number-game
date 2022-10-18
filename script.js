'use strict';

// document.querySelector('.message').textContent;
// document.querySelector('.message').textContent = 'Corret number :)';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// let aa = (document.querySelector('.guess').value = 23);
// console.log(aa);
// document.querySelector('.guess').value;

// const aaa = function(){
//     console.log(document.querySelector('.guess').value
// }

// document.querySelector('.check').addEventListener('click', aaa);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No numbeeeer!';
  }
});
