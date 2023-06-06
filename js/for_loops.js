"use strict";

// console.log("Is this mic on?");

function showMultiplicationTable(input) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${input} = ${input * i}`);
    }
}

showMultiplicationTable(7);

function isEvenOrOdd(someNumber) {
    if (someNumber % 2 === 0) {
        return "even";
    } else if (someNumber % 2 === 1) {
        return "odd";
    }
}

for (let i = 0; i < 10; i++) {
    let random = Math.floor((Math.random() * 180) + 20);
    console.log(`${random} is ${isEvenOrOdd(random)}`);
}

for (let val = 1; val < 10; val++) {
    console.log(val.toString().repeat(val));
}

for (let i = 100; i >= 5; i -= 5) {
    console.log(i);
}
