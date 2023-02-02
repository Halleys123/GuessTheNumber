'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Answer';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 7;

// document.querySelector('.guess').value = 12;

function messagePlayer(text) {
  document.querySelector('.message').textContent = text;
}
function bodyColor(color) {
  document.querySelector('body').style.backgroundColor = color;
}

let RandomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let HighScore = 0;
let tempScore;
let won = false;
let lost = false;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    messagePlayer('No Number!');
  } else {
    if (guess > RandomNumber) {
      if (score > 1) {
        if (guess > RandomNumber + 3) {
          messagePlayer('Too High...');
        } else if (guess <= RandomNumber + 3) {
          messagePlayer('High...');
        }
        score--;
      } else {
        lost = true;
      }
    } else if (guess < RandomNumber) {
      if (score > 1) {
        if (guess < RandomNumber - 3) {
          messagePlayer('Too Low...');
        } else if (guess <= RandomNumber - 3) {
          messagePlayer('Low...');
        }
        score--;
      } else {
        lost = true;
      }
    } else {
      messagePlayer('You Won!!!');
      tempScore = score;
      tempScore > HighScore ? (HighScore = tempScore) : (HighScore = HighScore);
      bodyColor('#60b347');
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = RandomNumber;

      document.querySelector('.check').textContent = '';
      document.querySelector('.check').style.height = '0';
      document.querySelector('.check').style.padding = '0';
      won = true;
      wonAnimation();
    }
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = HighScore;
  }

  if (lost === true) {
    bodyColor('#f03e3e');
    messagePlayer('You Lost!!!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.guess').value = Number('');
  messagePlayer('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';

  document.querySelector('.check').textContent = 'Check!';
  document.querySelector('.check').style.height = 'auto';
  document.querySelector('.check').style.padding = '2rem 3rem';
  lost = false;
  won = false;
  RandomNumber = Math.trunc(Math.random() * 20) + 1;

});

function addClass(wordNumb) {
  document.querySelector(`.Word${wordNumb}`).classList.add('jump');
}

//Word Jumping tried not working
function wonAnimation(k) {
  setTimeout(function () {
    document.querySelector(`.Word${1}`).classList.add('jump');
  }, 300 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${1}`).classList.remove('jump');
  }, 550 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${2}`).classList.add('jump');
  }, 850 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${2}`).classList.remove('jump');
  }, 1100 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${3}`).classList.add('jump');
  }, 1350 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${3}`).classList.remove('jump');
  }, 1650 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${4}`).classList.add('jump');
  }, 1900 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${4}`).classList.remove('jump');
  }, 2150 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${5}`).classList.add('jump');
  }, 2450 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${5}`).classList.remove('jump');
  }, 2700 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${6}`).classList.add('jump');
  }, 3000 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${6}`).classList.remove('jump');
  }, 3250 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${7}`).classList.add('jump');
  }, 3550 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${7}`).classList.remove('jump');
  }, 3800 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${8}`).classList.add('jump');
  }, 4100 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${8}`).classList.remove('jump');
  }, 4350 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${9}`).classList.add('jump');
  }, 4650 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${9}`).classList.remove('jump');
  }, 4900 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${10}`).classList.add('jump');
  }, 5150 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${10}`).classList.remove('jump');
  }, 5450 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${11}`).classList.add('jump');
  }, 5700 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${11}`).classList.remove('jump');
  }, 6000 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${12}`).classList.add('jump');
  }, 6250 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${12}`).classList.remove('jump');
  }, 6550 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${13}`).classList.add('jump');
  }, 6800 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${13}`).classList.remove('jump');
  }, 7050 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${14}`).classList.add('jump');
  }, 7300 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${14}`).classList.remove('jump');
  }, 7600 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${15}`).classList.add('jump');
  }, 7850 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${15}`).classList.remove('jump');
  }, 8100 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${16}`).classList.add('jump');
  }, 8400 / 3);
  setTimeout(function () {
    document.querySelector(`.Word${16}`).classList.remove('jump');
  }, 8650 / 3);
}
