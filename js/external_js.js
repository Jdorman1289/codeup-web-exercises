"use strict";

alert('Welcome to my Website!');

console.log("Hello from external JavaScript");

let userColor = prompt("What is your favorite color?");

alert(`Great, ${userColor} is my favorite color too!`);


alert("You have rented some movies for your kids. The following questions will ask for how many days you have rented each movie.");
let daysFilm1 = prompt("The little mermaid?");
let daysFilm2 = prompt("Brother Bear?");
let daysFilm3 = prompt("Hercules?");
let pricePerDay = prompt("How much is the price for a movie per day?");

daysFilm1 = parseFloat(daysFilm1);
daysFilm2 = parseFloat(daysFilm2);
daysFilm3 = parseFloat(daysFilm3);
pricePerDay = parseFloat(pricePerDay)

alert(`You owe the rental store ${(daysFilm1 + daysFilm2 + daysFilm3) * pricePerDay} dollars!`);


// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.