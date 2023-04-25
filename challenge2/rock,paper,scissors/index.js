let hands = ["rock", "paper", "scissor"];

function rndSelecletion() {
   let randomIndex = Math.floor(Math.random() * 3)
   return hands[randomIndex];
}

console.log(rndSelecletion());