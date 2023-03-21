let countPeople = document.getElementById("count");

// Initialize the count as 0
let count = 0;

// Listen for clicks on the increment button
function increment() {

    // Increment the count variable when increment button is clicked
    count = count + 1

    //change the count in the HTML to relect the new count
    countPeople.innerText = count
    
}

function save(){
    console.log(count);
}



