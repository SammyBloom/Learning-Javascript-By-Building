// create two variables, firstCard and secondCard
// Set their values to a random number between 2 and 11
let messagePrompt = document.getElementById("message-prompt");
// let sum = document.getElementById("sum-cards");
let sum = document.querySelector(".sum-cards");
let card = document.querySelector("#cards");

let firstCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let secondCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;

// Sum up the two cards
let sumCard = firstCard + secondCard;

//check if blackJack condition was met
let hasBlackJack = false;

// check if we are still in the game
let isAlive = true;

// A varaible called message and assign a string value to it
let message = "We're logging out";

function startGame() {
    sum.textContent = "Sum: " + sumCard;
    card.textContent = "Cards: " + firstCard + " " + secondCard;
  //conditionals
  if (sumCard <= 20) {
    message = "Do you want to draw another card?";
  } else if (sumCard === 21) {
    message = "Congratulations";
    hasBlackJack = true;
  } else {
    message = "You're out of the game. Try again later";
    isAlive = false;
  }

  // CASH OUT
  messagePrompt.textContent = message;
}

function newCard(){
    console.log("New card picked");
    let newCard = 2;

    sumCard += newCard
    startGame();
}
