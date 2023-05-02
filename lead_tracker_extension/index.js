const inputSa = document.getElementById("input-sa");
const inputBtn = document.getElementById("input-btn");
const ulSa = document.getElementById("ul-sa");

let myLeads = ["google", "facebook", "amazon", "spotify", "tinder"];

inputBtn.addEventListener("click", function(){
    myLeads.push(inputSa.value);
    console.log(myLeads);
});

for (let i = 0; i < myLeads.length; i++) {
    ulSa.innerHTML += "<li>" + myLeads[i] + "</li>"
}