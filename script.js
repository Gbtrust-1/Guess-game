// // "use strict";
// document.body.innerHTML +=
//   '<a href="https://ewebalsms.com" style="color: #fff; text-decoration: none;">Click here</a>';

// // const title = document.querySelector(".title");
// // const containerEl = document.querySelector(".container");
// // const labelMessage = document.querySelector(".message");
// // title.textContent = "Guess Game";
// // labelMessage.textContent = "🤔 Start guessing...";
// // // Display an alert
// // alert("I love coding!!! ⚡");

// /////////////////////////////////////
// // Guess Game_H

// // Selecting the elements.
const labelTitle = document.querySelector(".title");
const labelSecret = document.querySelector(".secret");
const labelMessage = document.querySelector(".message");
const labelAttempt = document.querySelector(".attempt");
const labelHighscore = document.querySelector(".highscore");

const guessInput = document.querySelector(".guess");

const btnCheck = document.querySelector(".btn-check");
const btnReset = document.querySelector(".btn-reset");

// const personName = prompt("Give us your name");
// labelTitle.textContent = `Guess my number, ${personName ?? "John"}`;

// // generation of secret number
// let secretNumber = Math.floor(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// // using the addEventlistener to listen to event on the check button.
btnCheck.addEventListener("click", function () {
  // get the guess
  const guess = Number(guessInput.value);

  //check if there was no input and display a message
  if (!guess) labelMessage.textContent = "🚀 there is no number!";
  //check if guess matches the generated secret n umber
  else if (guess === secretNumber) {
    // display a message
    labelMessage.textContent = "🤑 Your guess is correct!";

    // change the background
    document.body.style.backgroundColor = "green";

    // display secret number
    labelSecret.textContent = secretNumber;

    // update the highscore
    if (score > highscore) {
      highscore = score;
      labelHighscore.textContent = highscore;
    }

    // disable the check button
    btnCheck.disable = true;
  } else if (guess !== secretNumber) {
    // display a message
    if (guess > secretNumber) {
      labelMessage.textContent = "Your guess is too high! ";
    } else {
      labelMessage.textContent = "Your guess is low";
    }

    // Decrement the score / trial
    score--;
    labelAttempt.textContent = score;
    console.log(score);

    if (score <= 0) {
      // display a message
      labelMessage.textContent = "Oops! you lost!";
      // chage the background
      document.body.style.backgroundColor = "crimson";

      // set score to zero
      score = 0;
      labelAttempt.textContent = score;

      // disable the check button
      btnCheck.disable = true;
    }
  }
});

btnReset.addEventListener("click", function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  guessInput.value = "";
  labelSecret.textContent = "?";
  labelMessage.textContent = "Start guessing...";
  labelAttempt.textContent = score;
  document.body.style.backgroundColor = "#313131";
  btnCheck.disable = false;
});





"use strict";

// Add a link to the body
document.body.innerHTML += `
  <a href="https://ewebalsms.com" style="color: #fff; text-decoration: none;">Click here</a>
`;

// Selecting elements
const elements = {
  labelTitle: document.querySelector(".title"),
  labelSecret: document.querySelector(".secret"),
  labelMessage: document.querySelector(".message"),
  labelAttempt: document.querySelector(".attempt"),
  labelHighscore: document.querySelector(".highscore"),
  guessInput: document.querySelector(".guess"),
  btnCheck: document.querySelector(".btn-check"),
  btnReset: document.querySelector(".btn-reset"),
};

// Prompt for player's name and display a personalized title
const playerName = prompt("What is your name?") || "John";
elements.labelTitle.textContent = `Guess my number, ${playerName}`;

// Initialize game state
let secretNumber = generateSecretNumber();
let score = 20;
let highscore = 0;

// Helper function to generate a random number
function generateSecretNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

// Function to update the message
function updateMessage(message) {
  elements.labelMessage.textContent = message;
}

// Function to reset the game
function resetGame() {
  secretNumber = generateSecretNumber();
  score = 20;
  elements.guessInput.value = "";
  elements.labelSecret.textContent = "?";
  updateMessage("Start guessing...");
  elements.labelAttempt.textContent = score;
  document.body.style.backgroundColor = "#313131";
  elements.btnCheck.disabled = false;
}

// Function to handle the player's guess
function handleGuess() {
  const guess = Number(elements.guessInput.value);

  // If no input
  if (!guess) {
    updateMessage("🚀 Please enter a number!");
    return;
  }

  // If the guess is correct
  if (guess === secretNumber) {
    updateMessage("🤑 Correct! You win!");
    document.body.style.backgroundColor = "green";
    elements.labelSecret.textContent = secretNumber;

    // Update highscore
    if (score > highscore) {
      highscore = score;
      elements.labelHighscore.textContent = highscore;
    }

    elements.btnCheck.disabled = true; // Disable further guesses
    return;
  }

  // If the guess is incorrect
  updateMessage(guess > secretNumber ? "Your guess is too high!" : "Your guess is too low!");
  score--;
  elements.labelAttempt.textContent = score;

  // If the player loses
  if (score <= 0) {
    updateMessage("Oops! You lost!");
    document.body.style.backgroundColor = "crimson";
    elements.labelAttempt.textContent = 0;
    elements.btnCheck.disabled = true; // Disable further guesses
  }
}

// Attach event listeners
elements.btnCheck.addEventListener("click", handleGuess);
elements.btnReset.addEventListener("click", resetGame);
