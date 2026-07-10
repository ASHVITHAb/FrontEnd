//1. Stores Multiple Values
let numbers = [10, 20, 30, 40];

console.log(numbers);
// Output
// [10, 20, 30, 40]

// 2. Index Starts from 0
let fruits = ["Apple", "Mango", "Orange"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// Output
// Apple
// Mango
// Orange

// 3. Arrays Can Store Different Data Types
let data = [
    "Ashvitha",
    23,
    true,
    95.5
];

console.log(data);
// Output

// ["Ashvitha", 23, true, 95.5]

// Common Array Methods

// 1. length

let fruits = ["Apple", "Mango", "Orange"];

console.log(fruits.length);

// Output
// 3


// 2. push()

let fruits = ["Apple", "Mango"];

fruits.push("Orange");

console.log(fruits);

// Output

// ["Apple", "Mango", "Orange"]

// 3. pop()

let fruits = ["Apple", "Mango", "Orange"];

fruits.pop();

console.log(fruits);

// Output
// ["Apple", "Mango"]

// 4. unshift()

let fruits = ["Mango", "Orange"];

fruits.unshift("Apple");

console.log(fruits);

// Output
// ["Apple", "Mango", "Orange"]

// 5. shift()



let fruits = ["Apple", "Mango", "Orange"];

fruits.shift();

console.log(fruits);

// Output

// ["Mango", "Orange"]

// 6. indexOf()


let fruits = ["Apple", "Mango", "Orange"];

console.log(fruits.indexOf("Mango"));

Output

1
7. includes()

Checks whether an element exists.

let fruits = ["Apple", "Mango", "Orange"];

console.log(fruits.includes("Apple"));

Output

true
8. slice()

Returns a portion of the array.

let fruits = ["Apple", "Mango", "Orange", "Grapes"];

console.log(fruits.slice(1, 3));

Output

["Mango", "Orange"]
9. splice()

Adds, removes, or replaces elements.

let fruits = ["Apple", "Mango", "Orange"];

fruits.splice(1, 1);

console.log(fruits);

Output

["Apple", "Orange"]
10. sort()

Sorts the array.

let fruits = ["Orange", "Apple", "Mango"];

fruits.sort();

console.log(fruits);

Output

["Apple", "Mango", "Orange"]


