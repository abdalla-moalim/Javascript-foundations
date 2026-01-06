// JAVASCRIPT BASICS AND FUNDAMENTALS
// 	What is JavaScript?
// •	a versatile dynamically typed language that makes web pages interactive.
// •	a single-threaded language that executes one task at a time.
// •	an interpreted language which means it executes the code line by line.

// Adding JavaScript in HTML document:
// There are 3 methods to do this:

// a.	Inline JS: JS code added directly inside the HTML document using attributes like onclick, onmouseover, etc. Example:
// <button onclick="alert('Hello World!')">Click Me</button>

// b.	Internal JS: JS code added within <script> tags inside the HTML document, usually in the <head> or <body> section. Example:
// <script>
//   function greet() {
//     alert('Hello World!');
//   }
// </script>

// c.	External JS: JS code placed in a separate .js file and linked to the HTML document using the <script> tag with the src attribute. 
// Example:  <script src="script.js"></script>

// Variables and Data Types
// Variables are containers for storing data values. In JavaScript, you can declare variables using var, let, or const.
// use let and const for block-scoped variables (modern), while var is function-scoped (older).
let name = 'John'; // string
const age = 30; // number
var isStudent = false; // boolean

// Data types in JavaScript include:
// 1. Primitive types: string, number, boolean, null, undefined, symbol, bigint
// 2. Non-primitive types: arrays, functions, objects

// Type Conversion
// JavaScript is a dynamically typed language, meaning variables can hold values of any type and types can change at runtime.
// You can convert between types using built-in functions like String(), Number(), and Boolean().

let strNum = '100';
let convertedNum = Number(strNum); // converts string to number
console.log(convertedNum); // 100
console.log(typeof convertedNum); // number

let num = 50;
let convertedStr = String(num); // converts number to string
console.log(convertedStr); // '50'
console.log(typeof convertedStr); // string

let boolValue = true;
let convertedBoolStr = String(boolValue); // converts boolean to string
console.log(convertedBoolStr); // 'true'
console.log(typeof convertedBoolStr); // string

// Type Coercion
// JavaScript automatically converts types when performing operations between different types.
console.log('5' + 10); // '510' (string concatenation)
console.log('5' - 2); // 3 (string converted to number) 
console.log('10' * '2'); // 20 (both strings converted to numbers)
console.log('10' / '2'); // 5 (both strings converted to numbers)

// Comparison Operators
// Used to compare two values and return a boolean result (true or false).
// Examples: ==, ===, !=, !==, >, <, >=, <=
// always use === and !== to avoid type coercion issues.

console.log(5 == '5'); // true (loose equality, type coercion)
console.log(5 === '5'); // false (strict equality, no type coercion)
console.log(10 != '10'); // false (loose inequality, type coercion)
console.log(10 !== '10'); // true (strict inequality, no type coercion)
console.log(7 > 3); // true
console.log(4 < 2); // false
console.log(6 >= 6); // true
console.log(5 <= 4); // false
// Logical Operators
// Used to combine or manipulate boolean values (true/false).
// Examples: && (AND), || (OR), ! (NOT)
// order of precedence: ! > && > ||

console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false

// Example usage:
let isAdult = true;
let hasID = false;

console.log(isAdult && hasID);  // false (both conditions must be true)
console.log(isAdult || hasID);  // true (at least one condition is true)
console.log(!hasID);            // true (negates false to true)

// Practice Exercises
// 1. What will be the output and type of the variable x after the following operations?

let x = '5';
x = x + 1;  // JavaScript converts '5' to '51' (string concatenation)
console.log(x); // '51'
console.log(typeof x); // string

// 2. Evaluate the following expressions and print the results:

console.log((5 > 3) && (2 < 4)); // true
console.log((1 === 1) && (2 === 3)); // false
console.log((5 === 5) || (3 !== 3)); // true
console.log((4 < 2) || (6 > 5)); // true
console.log(!(3 <= 1)); // true
console.log(!(8 === 8)); // false
console.log(!(10 <= 10)); // false
console.log((2 + 2 === 4) && (3 * 3 === 9)); // true
console.log((7 >= 9) || (5 < 5)); // false
console.log((4 < 2) || (8 > 5)); // true
console.log(!(false && true)); // true
console.log((3 === 3) && !(4 < 1)); // true    

