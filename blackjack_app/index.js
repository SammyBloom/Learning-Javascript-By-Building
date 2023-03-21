// create two variables, firstCard and secondCard
// Set their values to a random number between 2 and 11
let firstCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
console.log(firstCard);
let secondCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;

// Sum up the two cards
let sum = firstCard + secondCard;

//check if blackJack condition was met
let hasBlackJack = false;

// check if we are still in the game
let isAlive = true;

// A varaible called message and assign a string value to it
let message = "We're logging out";

//conditionals
if (sum <= 20){
    message = "Do you want to draw another card? 🙂";
} else if (sum === 21){
    message = "Congratulations 🥳";
    hasBlackJack = true;
    isAlive = false;
} else {
    message = "You're out of the game. Try again later 😢";
    isAlive = false;
}

// CASH OUT
console.log(hasBlackJack);
console.log(isAlive);
console.log(message);