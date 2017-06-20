// function add(a, b) {
//     return a + b;
// }

// console.log(add(3, 1));

// var toAdd = [9, 5];
// console.log(add(...toAdd));

// const groupA = ["Jean", "Cory"];
// const groupB = ["Vikram"];
// const final = [...groupB, 3, ...groupA];

// console.log(final);

function greet(name, age) {
    return `Hi ${name}, you are ${age}`;
}

const person = ["Aurelien", 26];
const person2 = ["Eloise", 25];

console.log(greet(...person));
console.log(greet(...person2));

const names = ["Mike", "Ben"];
const final = ["Aurelien", ...names];

final.forEach(name => console.log("Hi " + name));