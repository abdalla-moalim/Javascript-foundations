// JavaScript Exercises
// strings

// Create a variable city with the value "London".
// Print its length.
// Print it in uppercase and lowercase.
// Check if it contains "don" and print the position.
// Print the first and last character.

const city = "London";
console.log(city.length); // 6
console.log(city.toUpperCase()); // LONDON
console.log(city.toLowerCase()); // london
console.log(city.includes("don")); // true
console.log(city.indexOf("don")); // 3
console.log(city[0], city[city.length - 1]); // L n

// Create a variable sentence with the value "I love learning JavaScript".
// Extract "learning" using slice.
// Replace "JavaScript" with "coding".
// Split the sentence into an array of words.
// Split the sentence into an array of characters.

const sentence = "I love learning Javascript";
console.log(sentence.slice(7, 15)); // learning
console.log(sentence.replace("Javascript", "Coding")); // I love learning Coding
console.log(sentence.split(" ")); // [ 'I', 'love', 'learning', 'Javascript' ]
console.log(sentence.split(""));


// create a variable firstName = "John" and lastName = "Doe".
// Combine them into a full name using template literals.
// Print: "Hello, my name is John Doe".

const firstName = "John";
const lastName = "Doe";
console.log(`${firstName} ${lastName}`);
console.log(`Hello, my name is ${firstName} ${lastName}`);

// Create a variable message = " JavaScript is fun! "
// Remove any extra spaces at the start and end.
// Check if the message starts with "JavaScript" and ends with "fun!".

const message = "Javascript is fun!";
const cleanMessage = message.trim(); // removes spaces from start and end
console.log(cleanMessage.length);
console.log(cleanMessage.startsWith("Javascript"));
console.log(cleanMessage.endsWith("fun!"));


// Create variables isLoggedIn = true and hasSubscription = false.
//  Print both values.
// Use them to print "Access granted" if both are true, else "Access denied".

const isLoggedIn = true;
const hasSubscription = false;
console.log(isLoggedIn, hasSubscription);
console.log(`isLoggedIn: ${isLoggedIn}, hasSubscription: ${hasSubscription}`); // using template lterals


// Create a variable y without assigning a value.
// Print its type.
// Assign a value 10 and print the type again.
// Create a variable userAge = 25.
// Check if the user is an adult (>=18) and print true or false.

let y;
console.log(typeof y); // undefined
y = 10;
console.log(typeof y); // number
const userAge = 25;
console.log(userAge >= 18); // true


// Create a variable numStr = "50" and numVal = 20.
// Add them as numbers.
// Concatenate them as strings.
// Create a variable fullName = "Abdalla Dahir Moalim".
// Print the first name, middle name, and last name separately using slice and indexOf.

const numStr = '50';
const numVal = 20;
console.log(numStr + numVal);

const fullName = 'Abdalla Dahir Moalim';
console.log(fullName.indexOf('Abdalla'))
console.log(fullName.indexOf('Dahir'));
console.log(fullName.indexOf('Moalim'));

console.log(fullName.slice(0,7));
console.log(fullName.slice(8,13));
console.log(fullName.slice(14));



// Create a variable task = "Complete 5 exercises today"
// Extract the number 5 from the string and convert it to a number.
// Check if the string includes "exercises".

const task = 'complete 5 exercises today';
const fiveIndex = task.indexOf('5');
const num = task.slice(fiveIndex, fiveIndex +1);
console.log(num); // 5
console.log(typeof num); // sring
const converted = Number(num);
console.log(typeof converted); // number

console.log(task.includes('exercises')); // true



// Javascript Operators Exercise
// What will be the output and type of the variable x after the following operations?

let x = '5';
x ++;  // JavaScript converts '5' to 5, then adds 1
console.log(x); // 6
console.log(typeof x); // number

// Note: the increment (++) and decrement (--) operators always convert to numbers in JavaScript! 

// Logical Operators = used to combine or manuipulate boolean values (true/false).
// oprators: AND (&&) = Both must be true, OR (||) = at least one must be true, NOT (!) = negates the value.
// What will be the output of the following expressions?

console.log(true && false); // false , both conditions are not true
console.log(true || false); // true, at least one condition is true
console.log(!true); // false, negates true to false
console.log(!false); // true, negates false to true

// Evaluate the following expressions and print the results:
console.log((5 > 3) && (2 < 4)); // true, both conditions are true
console.log((1 === 1) && (2 === 3)); // false, second condition is false
console.log((5 === 5) || (3 !== 3)); // true, first condition is true
console.log((4 < 2) || (6 > 5)); // true, second condition is true
console.log(!(3 <= 1)); // true, negates false to true
console.log(!(8 === 8)); // false, negates true to false
console.log(!(10 <= 10)); // false, negates true to false
console.log((2 + 2 === 4) && (3 * 3 === 9)); // true, both conditions are true
console.log((7 >= 9) || (5 < 5)); // false, both conditions are false
console.log((4 < 2) || (8 > 5)); // true, second condition is true
console.log(!(false && true)); // true, negates false to true
console.log((3 === 3) && !(4 < 1)); // true, both conditions are true


const age = 20;
const hasID = true;

console.log(age >= 18 && hasID); // true, both expressions are true
console.log(age < 18 || !hasID); // !hasID = false, both expressions are false
console.log(!(age >= 18 && !hasID)); // age>= 18 is true, !hasID = false, true && false = false, !(false) = true
console.log((age >= 18 && hasID) || (age < 18 && !hasID)); // true && true  = true, false && false = false, true || false = true 


// solve the following complex logical expressions and print the results:

console.log((true && true) || false); // true || false = true (one expression is true)
console.log((false || true) && (true || false)); // true && true = true (both expressions are true)
console.log(!(true && false) || (false && true)); // !(false) || false = true || false = true
console.log(false || (true && false)); // false || false = false
console.log((true || false) && !(false || false)); // true && !(false) = true && true = true
console.log(!(true || false) && true); // !(true) && true = false && true = false
console.log(!(false || true) || false); // !(true) || false = false || false = false


console.log(10 > 5 && 5 > 2 && 2 > 1); // true && true && true = true
console.log(8 < 3 || 4 === 4 || 6 > 10); // false || true || false = true
console.log(!(12 <= 12) && (7 !== 5)); // !(true) && true = false && true = false
console.log(!(15 - 5 === 10) || (4 / 2 === 2)); // !(true) || true =  false || true  = true
console.log((14 - 4 === 10) || !(3 * 3 === 9)); // true || !(true) = true || false = true
console.log(!(20 / 4 === 5) && (6 + 4 === 10)); // !(true) && true = false && true = false
console.log(!(3 + 2 === 5) && (7 - 2 === 5)); // !(true) && true = false && true = false
console.log((4 * 2 === 8) || !(9 - 3 === 6)); // true || !(true) = true || false = true
console.log(!(15 % 4 === 3) || (10 - 5 === 5)); // !(true) || true = false || true = true 
console.log(!(9 >= 9) && (2 + 2 === 5)); // !(true) && false = false && false = false 
console.log((3 * 3 === 9) || !(1 + 1 === 3)); // true || !(false) = true || true = true
console.log(10 === "10" || 5 === 5); // false || true = true 
console.log(!(7 !== 7) && 3 <= 3); // !(false) && true = true && true = true 
console.log(6 / 2 === 3 && !(4 * 2 < 8)); // true && !(false) = true && true = true  
console.log((1 + 1 === 2) || (2 + 2 === 5) && (3 + 3 === 6)); // true || false && true  = false && true = false, true || false  = true
console.log(!(5 > 3) || (4 < 6) && ('2' === 2)); // !(true) || true && false = false || false = false  

