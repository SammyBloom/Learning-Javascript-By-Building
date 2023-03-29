// create two variables, firstCard and secondCard
// Set their values to a random number between 2 and 11
let messagePrompt = document.getElementById("message-prompt");
// let sum = document.getElementById("sum-cards");
let sum = document.querySelector(".sum-cards");
let card = document.querySelector("#cards");

let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]; //array - ordered list of items
// Sum up the two cards
let sumCard = firstCard + secondCard;

//check if blackJack condition was met
let hasBlackJack = false;

// check if we are still in the game
let isAlive = true;

// A varaible called message and assign a string value to it
let message = "We're logging out";

function getRandomCard(){
  return 5;
}

function startGame(){
    renderGame();
}

function renderGame() {
    sum.textContent = "Sum: " + sumCard;
    // render cards
    card.textContent = "Cards: ";
    // render all the cards we have
    for(let i = 0; i < cards.length; i++){
      card.textContent += cards[i] + " ";
    }

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
    let newCard = getRandomCard();
    cards.push(newCard);

    sumCard += newCard
    renderGame();
}
