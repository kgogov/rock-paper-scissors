alert('Welcome to Rock-Paper-Scissors! One game is 5 rounds! Game on!');
game();

function game() {
  let round = 0;

  while (round < 5) {
    alert((playRound(computerPlay(), userPlay())));
    round++;
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'Tie!';
  } else {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
      return 'Computer wins!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
      return 'Player wins!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      return 'Player wins!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
      return 'Computer wins!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
      return 'Computer wins!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
      return 'Player wins!';
    }
  }
}

function computerPlay() {
 const gameWeapons = ['rock', 'paper', 'scissors'];
 return gameWeapons[Math.floor(Math.random() * gameWeapons.length)];
}

function userPlay() {
  let userWeapon;

  while (true) {
    // It is possible to check for a falsy value in a variable with a simple conditional
    if (!userWeapon) {
      userWeapon = prompt('Choose your weapon (rock; paper; scissors): ', '');
    } else if (userWeapon !== 'rock' && userWeapon !== 'paper' && userWeapon !== 'scissors') {
      userWeapon = prompt('Choose your weapon (rock; paper; scissors): ', '').toLowerCase();
    } else {
      return userWeapon.toLowerCase();
    }
  }
}