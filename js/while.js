let i = 1;
let printOut = 2;

while (i <= 16) {
    console.log(printOut);
    printOut += printOut;
    i++;
}

let allCones = Math.floor(Math.random() * 50) + 50;

do {
    let conesBought = Math.floor(Math.random() * 5) + 1;
    if (conesBought > allCones) {
        console.log(`I can not sell you ${conesBought} I only have ${allCones} left!`);
        continue;
    } else if (conesBought < allCones) {
        console.log(`${conesBought} cones sold!`);
    } else {
        console.log("Yay! I sold them all!");
    }
    allCones -= conesBought;
} while (allCones > 0);
