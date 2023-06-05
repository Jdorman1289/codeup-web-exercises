function makeUpperCase(input) {
    if (typeof input !== "string") {
        return false;
    } else {
        return input.toUpperCase();
    }
}

console.log(`returned ${makeUpperCase('cat')} and should return CAT`);
console.log(`returned ${makeUpperCase('DoG')} and should return DOG`);
console.log(`returned ${makeUpperCase('CODEUP')} and should return CODEUP`);
console.log(`returned ${makeUpperCase(54)} and should return false`);
console.log(`returned ${makeUpperCase(true)} and should return false`);
console.log(`returned ${makeUpperCase(null)} and should return false`);
console.log(`returned ${makeUpperCase("5")} and should return 5`);