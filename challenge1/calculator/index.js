let num1 = 8
let num2 = 2
document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2
let display = document.getElementById("sum");

// Create four functions: add(), subtract(), divide(), multiply() 
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum"
function add(){
    let sum = num1 + num2;
    display.textContent = sum;
}

function minus(){
    let subtract = num1 - num2;
    display.textContent = subtract;
}

function divide(){
    let division = num1 / num2;
    display.textContent = division;
}

function multiply(){
    let times = num1 * num2;
    display.textContent = times;
}


// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum"