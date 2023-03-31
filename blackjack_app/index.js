// create two variables, firstCard and secondCard
// Set their values to a random number between 2 and 11
let messagePrompt = document.getElementById("message-prompt");
// let sum = document.getElementById("sum-cards");
let sum = document.querySelector(".sum-cards");
let card = document.querySelector("#cards");


let cards = []; //array - ordered list of items
// Sum up the two cards
let sumCard = 0;

//check if blackJack condition was met
let hasBlackJack = false;

// check if we are still in the game
let isAlive = false;

// A varaible called message and assign a string value to it
let message = "";

let player = {
  name:"Sammy",
  chips: 145
}

let playerName = document.getElementById("player_name");
playerName.textContent = player.name + ": " + player.chips;

// function to get random number between 1 and 13
function getRandomCard(){
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber = 10){
    return 10; //the value of the jack, king and queen
  } else if (randomNumber === 1){
    return 11;
  } else{
    return randomNumber;
  }
}

function startGame(){
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sumCard = firstCard + secondCard;
  
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
  // allow player to pick new card if it is alive and does not have blackjack
  if(isAlive === true && hasBlackJack === false){
    let newCard = getRandomCard();
    cards.push(newCard);
    sumCard += newCard
    renderGame();
  }
}    
