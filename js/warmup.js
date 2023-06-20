// function makeUpperCase(input) {
//     if (typeof input !== "string") {
//         return false;
//     } else {
//         return input.toUpperCase();
//     }
// }
//
// console.log(`returned ${makeUpperCase('cat')} and should return CAT`);
// console.log(`returned ${makeUpperCase('DoG')} and should return DOG`);
// console.log(`returned ${makeUpperCase('CODEUP')} and should return CODEUP`);
// console.log(`returned ${makeUpperCase(54)} and should return false`);
// console.log(`returned ${makeUpperCase(true)} and should return false`);
// console.log(`returned ${makeUpperCase(null)} and should return false`);
// console.log(`returned ${makeUpperCase("5")} and should return 5`);

// ================================= WARM UP

// Write a function, sumIsEqual, that takes in three inputs. The function should return
// true if the sum of the first two inputs are equal to the third input. If any of the
// inputs are not numbers, return false.
//
// function sumIsEqual(in1, in2, in3) {
//     if (typeof in1 !== "number" || typeof in2 !== "number" || typeof in3 !== "number") {
//         return false;
//     } else {
//         let sumOfIn1AndIn2 = in1 + in2;
//         return (sumOfIn1AndIn2 === in3);
//     }
// }
//
//
// console.log(sumIsEqual(1, 2, 3)); // returns true
// console.log(sumIsEqual(2, 2, 4)); // returns true
// console.log(sumIsEqual(10, 2, 12)); // returns true
// console.log(sumIsEqual(10, false, 12)); // returns false
// console.log(sumIsEqual('10', '2', 12)); // returns false
// console.log(sumIsEqual('fred', 'bob', 'hello')); // returns false
//


// ================================= WARM UP

// Write a function, returnUserObject, that takes in three String arguments:
// a username, password, and email. The function should return a user object with username,
// password and email properties.
// Assume all inputs are non-empty strings. The order of the properties does not matter.


// {
//     username: 'jreich',
//         password: 'password123',
//     email: 'jreich@email.com'
// }

function returnUserObject(userName, passW, email) {
    return {
        username: `${userName}`,
        password: `${passW}`,
        email: `${email}`,
    };
}


console.log(returnUserObject('jreich', 'password123', 'jreich@email.com'));
