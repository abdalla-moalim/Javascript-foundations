/* Functions = a section of reusbale code. 
Declare code once, use it whenever you want. 
Call the function to execute that code.  */

function add(x, y) {
  return x + y;
}
console.log(add(2, 3)); // 5

function subtract(x, y) {
  return x - y;
}
console.log(subtract(8, 12)); // -4

function multiply(x, y) {
  console.log(multiply(3, 5));
}
multiply(3, 5); // i got an ifinite loop!

function multiply(x, y) {
  return x * y;
}
console.log(multiply(5, 0)); // 0

function divide(x, y) {
  return x / y;
}
console.log(divide(25, 5)); // 5


function canLogin(isLoggedIn, hasAccount) {
    return isLoggedIn && hasAccount;
}
console.log(canLogin(false, true)); // output: false

// function calculateDiscount(total) {
  // if total >= 100 → return 10
  // else → return 0
// }

function calculateDiscount(total) {
    if (total >= 100) {
        return 10;
    }
    return 0;
}
console.log(calculateDiscount(550)); // output: 10

function greet(name = 'Guest') {
    return `Hello, my name is ${name}`;
}
console.log(greet('Abdalla')); // output: Hello, my name is Abdalla
console.log(greet('Amir')); // output: Hello, my name is Amir

const message = function (fName, lName) {
    return `Hello, ${fName} ${lName}`;
}
console.log(message('Abdalla', 'Dahir')); // output : Hello Abdalla Dahir

const birthdayMessage = function(userName, age) {
    console.log(`Happy birthday to ${userName}!`);
    console.log(`You are ${25} years old`);
}
birthdayMessage('Abdalla', 25); // output: Happy birthday to Abdalla   You are 25 years old

// function canVote(age) {
  // return true or false
// }

const canVote = function (age) {
    return age >= 18
}
console.log(canVote(17)); // false

// function safeDivide(a, b) {
  // if b === 0 → return "Error"
  // else → return a / b
// }

const safeDivide = function (a, b) {
    if(b === 0) {
        return 'Error'
    }
    return a / b
}
console.log(safeDivide(10, 0)); // output: Error



// function isValidUsername(username) {
  // must be at least 5 characters
// }

function isValidUsername (username) {
    return username.length >= 5;
}
console.log(isValidUsername('Sara')); // false


// exercise: find if a number is even or odd. if even, return true, else false.

function isEven (number) {
    if(number % 2 === 0) {
        return true;
    }
    return false; 
}
console.log(isEven(7)); // false