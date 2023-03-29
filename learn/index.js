// Arrays

// let messages = [
//     "Operations Manager at FESTI",
//     "5 years of software developing experience", 
//     "B.Eng Chemical ENgineering", 
//     "Microsoft and AWS certified",
//     "Backend development and DevOps Engineer",
//     "SOmethings never change"
// ]

// for(let i = 0; i < messages.length; i +=1){
//     console.log(messages[i]);
// }


// let newMessage = "Same here";
// messages.push(newMessage);

// messages.pop();
// console.log(messages);

// for (let i = 10; i <= 100; i +=10) {
//     console.log(i);
// }

let player1Time = 102;
let player2Time = 107;

function getTotalRaceTime() {
    return player1Time + player2Time;
}

let sumRaceTime = getTotalRaceTime()
console.log(sumRaceTime);