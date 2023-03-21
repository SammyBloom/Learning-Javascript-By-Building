// Create two variables
let firstName = "Samuel";
let lastName = " Nwanwobi";

// Concatenate the two varaibales
function greeting(){
    let fullName = firstName + lastName;

    //Log Fullname
    console.log(fullName);
}

greeting();


let myPoints = 3;

// Create two functions to add 3 points and remove 1 point from myPoints
function add3Points(){
    myPoints += 3
}

function remove1Point(){
    myPoints -= 1
}

add3Points();
add3Points();
remove1Point();
remove1Point();

console.log(myPoints);



