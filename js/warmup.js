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
//
// function returnUserObject(userName, passW, email) {
//     return {
//         username: `${userName}`,
//         password: `${passW}`,
//         email: `${email}`,
//     };
// }
//
//
// console.log(returnUserObject('jreich', 'password123', 'jreich@email.com'));

// function returnProduct(arr) {
//     let product = 1;
//     arr.forEach(numb => {
//         product *= numb;
//     })
//     return product;
// }

// function returnProduct(arr) {
//     return arr.reduce((product, currentValue) => product * currentValue, 1);
// }

// const returnProduct = arr => arr.reduce((product, currentValue) => product * currentValue, 1);
//
//
// console.log(returnProduct([1, 2, 3]), 6);
// console.log(returnProduct([3, 3, 3]), 27);
// console.log(returnProduct([4, 1, 2]), 8);
// console.log(returnProduct([4, 0, 2]), 0);
// console.log(returnProduct([5, 3, 2]), 30);

// ================================= WARM UP
//
// Create a function, returnTotalSales, that takes in an array of sales data objects and returns the sum of all
// totalItemsSold properties. Assume all elements in the input array are valid sales data objects with a totalItemsSold
// property.
//
//     EXAMPLE...
//


// function returnTotalSales(items) {
//     let sumOfItems = 0;
//     items.forEach(item => {
//         sumOfItems += item.totalItemsSold
//     })
//     return sumOfItems;
// }

// function returnTotalSales(items) {
//     return items.reduce((sumOfItems, current) => sumOfItems + current.totalItemsSold, 0);
// }

// const returnTotalSales = items => items.reduce((sumOfItems, current) => sumOfItems + current.totalItemsSold / items.length, 0);
//
// const salesData = [
//     {
//         month: 'January',
//         totalItemsSold: 0
//     },
//     {
//         month: 'February',
//         totalItemsSold: 5
//     },
//     {
//         month: 'March',
//         totalItemsSold: 2
//     },
//     {
//         month: 'April',
//         totalItemsSold: 10
//     },
//     {
//         month: 'May',
//         totalItemsSold: 30
//     }
// ];
//
//
// console.log(returnTotalSales(salesData), 9.4);

// Create a function, returnAdmins, that takes in an array of user objects
// and returns an array of only the admin user objects. Assume the array
// has at least one user object and all elements have an isAdmin property.
//
//     Example:

//
// const users = [
//
//     {
//         username: 'fred123',
//         password: 'letmein',
//         email: 'fred123@email.com',
//         isAdmin: true
//     },
//     {
//         username: 'cindy123',
//         password: 'hello123',
//         email: 'cindy123@email.com',
//         isAdmin: false
//     },
//     {
//         username: 'kathy123',
//         password: 'letmein',
//         email: 'kathy123@email.com',
//         isAdmin: true
//     },
//     {
//         username: 'kyle123',
//         password: 'letmein',
//         email: 'kyle123@email.com',
//         isAdmin: false
//     }
// ]
//
// function returnAdmins(users) {
//     let admins = [];
//     users.forEach(user => {
//         if (user.isAdmin) admins.push(user);
//     })
//     return admins;
// }
//
// console.log(returnAdmins(users));
//

// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable.
// If the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.
// The function should return true if the neighborhood object is desireable and false otherwise.

// example data...

// const neighborhood1 = {
//     neighborhood: "Lovely Estates",
//     medianHomePrice: 280000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: 22
// };
//
// const neighborhood2 = {
//     neighborhood: "Luminous Estates",
//     medianHomePrice: 270000,
//     pool: true,
//     tennis: false,
//     crimeRate: "high",
//     schools: 24
// }
//
// const neighborhood3 = {
//     neighborhood: "Oak Mountain",
//     medianHomePrice: 290000,
//     pool: false,
//     tennis: false,
//     crimeRate: "low",
//     schools: 24
// }
//
// const neighborhood4 = {
//     neighborhood: "Ginormous Acres",
//     medianHomePrice: 350000,
//     pool: true,
//     tennis: true,
//     crimeRate: "low",
//     schools: 27
// }
//
//
// function isValueGood(property) {
//     return !!(property.medianHomePrice < 300000 && property.schools >= 24 && property.crimeRate === "low");
// }
//
//
// console.log(isValueGood(neighborhood1));
// console.log(isValueGood(neighborhood2));
// console.log(isValueGood(neighborhood3));
// console.log(isValueGood(neighborhood4));

// ================================= WARM UP


// Write a function, returnLargestStudentCount, that takes in an array of classes returns the number of students in the largest class.
// Assume at least one class object will be present in the input array with students property set to a valid positive integer.

// let classes = [
//     {class: "6th grade history", students: 18},
//     {class: "7th grade history", students: 20},
//     {class: "8th grade history", students: 22},
//     {class: "4th grade history", students: 30},
//     {class: "10th grade history", students: 25}
// ];
// let classes2 = [
//     {class: "6th grade history", students: 500},
//     {class: "7th grade history", students: 20},
//     {class: "8th grade history", students: 22},
//     {class: "4th grade history", students: 30},
//     {class: "10th grade history", students: 25}
// ];
//
//
// // function returnLargestStudentCount(classes) {
// //     let highest = 0;
// //
// //     for (const element of classes) {
// //         if (element.students > highest) {
// //             highest = element.students;
// //         }
// //     }
// //     return highest;
// // }
//
// const returnLargestStudentCount = classes => classes.reduce((highest, element) => (element.students > highest) ? highest = element.students : highest + 0, 0);
//
// console.log(returnLargestStudentCount(classes2), 500); // returns 500
// console.log(returnLargestStudentCount(classes), 30); // returns 30

// You are given an array of runner objects, where each object represents a
// runner with properties name, age, and lapTimes (in seconds). Write a
// function called getTopRunners that takes the runners array as input and
// returns an array of top runners. A runner is considered top if their
// average lap time is 50 seconds or faster. If there are no top runners in
// the input array, the function should return an empty array


// HINT: You might want to create a function called calculateLapTimeAverage
// that takes in an array of numbers and returns the average


// Input:
const runners = [
    {name: "Alice", age: 25, lapTimes: [50.5, 45.2, 48.8, 47.1]},
    {name: "Bob", age: 28, lapTimes: [55.2, 50.7, 53.3, 52.9]},
    {name: "Charlie", age: 24, lapTimes: [48.9, 46.3, 50.1, 49.5]},
    {name: "David", age: 27, lapTimes: [51.4, 50.2, 49.8, 52.3]},
    {name: "Eve", age: 26, lapTimes: [47.7, 45.9, 46.6, 48.3]},
];

function getTopRunners(runners) {
    let champTime = 0;
    let answer = {}
    runners.forEach(runner => {
        let newNum = runner.lapTimes.reduce((sumOfItems, current) => sumOfItems + current, 0) / runner.lapTimes.length;
        if (newNum > champTime) {
            champTime = newNum;
            answer = runner;
        }
    })
    return answer;

}

console.log(getTopRunners(runners));

// Refactor your code from yesterday's warmup to return just the
// top runner

// Expected output:
// { name: 'Eve', age: 26, lapTimes: [47.7, 45.9, 46.6, 48.3] }