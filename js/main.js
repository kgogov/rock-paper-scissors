function game() {
  let round = 0;

  while (round < 5) {
    console.log(playRound(computerPlay(), userPlay()));
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
    if (isEmpty(userWeapon) && userWeapon == null) {
      userWeapon = prompt('Choose your weapon (rock; paper; scissors): ', '');
    } else if (userWeapon !== 'rock' && userWeapon !== 'paper' && userWeapon !== 'scissors') {
      userWeapon = prompt('Choose your weapon (rock; paper; scissors): ', '').toLowerCase();
    } else {
      return userWeapon.toLowerCase();
    }
  }
}

// Helper function
function isEmpty(str) {
  return (!str || 0 === str.length);
}