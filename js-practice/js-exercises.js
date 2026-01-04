// JavaScript Beginner Exercises
// strings

// Create a variable city with the value "London".
// Print its length.
// Print it in uppercase and lowercase.
// Check if it contains "don" and print the position.
// Print the first and last character.

// const city = "London";
// console.log(city.length); // 6
// console.log(city.toUpperCase()); // LONDON
// console.log(city.toLowerCase()); // london
// console.log(city.indexOf("don")); // 3
// console.log(city[0], city[city.length - 1]); // L n



// Create a variable sentence with the value "I love learning JavaScript".
// Extract "learning" using slice.
// Replace "JavaScript" with "coding".
// Split the sentence into an array of words.
// Split the sentence into an array of characters.

// const sentence = "I love learning Javascript";
// console.log(sentence.slice(7, 15)); // learning
// console.log(sentence.replace("Javascript", "Coding")); // I love learning Coding
// console.log(sentence.split(" ")); // [ 'I', 'love', 'learning', 'Javascript' ]
// console.log(sentence.split(""));


// Combine them into a full name using template literals.
// Print: "Hello, my name is John Doe".

// const firstName = "John";
// const lastName = "Doe";
// console.log(`${firstName} ${lastName}`);
// console.log(`Hello, my name is ${firstName} ${lastName}`);


// Create a variable message = " JavaScript is fun! "
// Remove any extra spaces at the start and end.
// Check if the message starts with "JavaScript" and ends with "fun!".

// const message = "Javascript is fun!";
// const cleanMessage = message.trim();
// console.log(cleanMessage.length);
// console.log(cleanMessage.startsWith("Javascript"));
// console.log(cleanMessage.endsWith("fun!"));


// // Numbers
// Create two variables, a = 15 and b = 7.
// Add, subtract, multiply, divide, and find the remainder.

// const a = 15;
// const b = 7;
// console.log(a + b); // 22
// console.log(a - b); // 8
// console.log(a * b); // 105
// console.log(a / b); // 2.142857142857143
// console.log(a % b); // 1


// Create a variable strNum = "120" and num = 30.
// Convert strNum to a number and add it to num.
// Convert num to a string and concatenate it with strNum.

// const strNum = '120';
// const strNum2 = Number(strNum); // 120
// const num = 30;
// console.log(strNum2 + num); // 150

// const str = String(num);
// console.log(str); // '30'
// console.log(strNum2 + str); // 12030


// Create a variable price = 499.99.
// Round it to the nearest whole number.
// Convert it to a string and print its type.

// const price = 499.99;
// const rounded = Math.round(price);
// console.log(rounded); // 500

// const str2 = String(rounded);
// console.log(str2);
// console.log(typeof str2); // string


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


const userAge = 25; // 








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

// const task = 'complete 5 exercises today';
// const fiveIndex = task.indexOf('5');
// const num = task.slice(fiveIndex, fiveIndex +1);
// console.log(num); // 5
// console.log(typeof num); // sring
// const converted = Number(num);
// console.log(typeof converted); // number

// console.log(task.includes('exercises')); // true











// not learnt yet
// Ask the user for their name using prompt() and store it in userName.
// - Print a greeting like "Hello, John! Your name has 4 letters" using template literals.
// - Convert their name to uppercase.


// Create a variable mixed = "10 apples and 5 oranges".
// Extract the numbers 10 and 5 from the string and find their sum.

// const mixed = '10 apples and 5 oranges';
// const firstNum = Number(mixed.slice(0,2));
// console.log(firstNum);

// const fiveIndex = mixed.indexOf(5);
// const secondNum = Number(mixed.slice(fiveIndex, fiveIndex +1));
// console.log(secondNum);

// const sum = firstNum + secondNum
// console.log(sum);
