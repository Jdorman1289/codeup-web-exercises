"use strict";

alert('Welcome to my Website!');

console.log("Hello from external JavaScript");

let userColor = prompt("What is your favorite color?");

alert(`Great, ${userColor} is my favorite color too!`);


// how much do you owe the rental store?
alert("You have rented some movies for your kids. The following questions will ask for how many days you have rented each movie.");
let daysFilm1 = prompt("The little mermaid?");
let daysFilm2 = prompt("Brother Bear?");
let daysFilm3 = prompt("Hercules?");
let pricePerDay = prompt("How much is the price for a movie per day?");

daysFilm1 = parseFloat(daysFilm1);
daysFilm2 = parseFloat(daysFilm2);
daysFilm3 = parseFloat(daysFilm3);
pricePerDay = parseFloat(pricePerDay);

alert(`You owe the rental store ${(daysFilm1 + daysFilm2 + daysFilm3) * pricePerDay} dollars!`);

// How much will you receive in payment for this week?
let compPay1 = prompt("Now suppose you're working as a contractor for 3 companies and they pay you a different rate per hour. How much does the first company pay you an hour?");
let compPay2 = prompt("How much does the second company pay you hourly?");
let compPay3 = prompt("How much does the third company pay you hourly?");

let compHours1 = prompt("Now, how many hours did you work for the first company this week?");
let compHours2 = prompt("how many hours did you work for the second company this week?");
let compHours3 = prompt("how many hours did you work for the third company this week?");

compPay1 = parseFloat(compPay1) * parseFloat(compHours1);
compPay2 = parseFloat(compPay2) * parseFloat(compHours2);
compPay3 = parseFloat(compPay3) * parseFloat(compHours3);

alert(`you made ${(compPay1 + compPay2 + compPay3)} dollar bucks!`)