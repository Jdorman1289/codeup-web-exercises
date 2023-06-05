let allTheOddWithinRange50 = [];
for (let i = 1; i <= 50; i += 2) {
    allTheOddWithinRange50.push(i);
}

let userNumberToSkip;
do {
    userNumberToSkip = prompt("Enter an odd number between 1 and 50");
} while (!allTheOddWithinRange50.includes(parseInt(userNumberToSkip)));

console.log(`Number to skip is: ${userNumberToSkip}`);

