'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number 🎉';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 11;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

// document.querySelector('.number').textContent = secretNumber;

// 'Again' button functionality

document.querySelector('.again').addEventListener('click', function () {
  // Choose new random number
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Re-initialize score
  score = 20;

  // Change message
  document.querySelector('.message').textContent = 'Start guessing...';

  // Change guessed number back to '?'
  document.querySelector('.number').textContent = '?';

  // Change width of 'number'
  document.querySelector('.number').style.width = '15rem';

  // Change backgroundcolor
  document.querySelector('body').style.backgroundColor = '#222';

  // Change input field
  document.querySelector('.guess').value = '';

  // Change score to 20
  document.querySelector('.score').textContent = score;
});

// 'Check' button functionality
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess);

  // IF THERE IS NO INPUT
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number';

    // IF PLAYER WINS
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number 🎉';

    // change bg color
    document.querySelector('body').style.backgroundColor = '#60b437';

    // make it wider
    document.querySelector('.number').style.width = '30rem';

    // Display correct number
    document.querySelector('.number').textContent = secretNumber;

    // Set highscore
    if (Number(score) > highScore) {
      highScore = Number(document.querySelector('.score').textContent);
      document.querySelector('.highscore').textContent = highScore;
    }
    // IF GUESS IS TOO HIGH
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess is too high 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You lost the game! 😔';
    }

    // IF GUESS IS TOO LOW
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess is too low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You lost the game! 😔';
    }
  }
});
