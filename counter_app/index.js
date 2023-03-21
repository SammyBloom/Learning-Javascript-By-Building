// Get id's of element
let countPeople = document.getElementById("count");
let save = document.getElementById("save");

// Initialize the count and save as 0
let count = 0;

// Listen for clicks on the increment button
function increment() {
    // Increment the count variable when increment button is clicked
    count += 1 

    //change the count in the HTML to relect the new count
    countPeople.textContent = count  
}

function saveEntry(){
    // Variable that contains both the count and dash seperator
    let previousEntries = count + " - ";

    // Render variable using textContent
    save.textContent += previousEntries;

    // Make the count variable reset to zero when the save button is clicked
    countPeople.textContent = 0; 
    count = 0;
}




