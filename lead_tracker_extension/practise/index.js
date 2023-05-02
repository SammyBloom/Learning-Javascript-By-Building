let box = document.getElementById("open-box");
let buyBtn =  document.getElementById("container");

box.addEventListener("click", function(){
    console.log("I want to open the box");
})

buyBtn.innerHTML = "<button onclick='buy()'>BUY!</button>";

function buy() {
    buyBtn.innerHTML += "<p>Thank you for buying!</p>"
}

