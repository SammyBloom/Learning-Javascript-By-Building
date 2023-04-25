let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"];


largeCountries.pop(); // removes the last element from the array
largeCountries.push("Pakistan"); // adds as the last element in the array

largeCountries.shift(); // removes the first element from the array
largeCountries.unshift("China"); // adds as the first element of the array

console.log("The 5 largest countries in the world:")
for (let i = 0; i < largeCountries.length; i++) {
    console.log("-" + largeCountries[i]);
}