/* Javascript If Statement
if statement is used to execute a block of code when a condition is true. 

if (condition) {
  statement = code to be executed if condition is true
}
*/

// evaluate the condition inside the parentheses:

const age = 11;
if (age < 18) {
  console.log("You are a minor."); // output: You are a minor.
}

const temperatureCheck = 5;
if (temperatureCheck < 10) {
  console.log("It's a cold day."); // output: It's a cold day.
}

const score = 85;
if (score >= 60) {
  console.log("You passed the exam!"); // output: You passed the exam!
}

const isRaining = true;
if (isRaining) {
  console.log("Don't forget to take an umbrella!"); // output: Don't forget to take an umbrella!
}

const number = 17;
if (number % 2 !== 0) {
  console.log("The number is odd"); // output: The number is odd
}

const num = 16;
if (num % 2 === 0) {
  console.log("The number is even"); // output: The number is even
}

const fName = "Ali";
if (fName === "Ali") {
  console.log("Hello, Ali!"); // output: Hello, Ali!
}

const time = 14;
if (time > 12) {
  console.log("Good afternoon!"); // output: Good afternoon!
}

const isLoggedInStatus = false;
if (!isLoggedInStatus) {
  console.log("Please log in to continue."); // output: Please log in to continue.
}

const itemsInCart = 3;
if (itemsInCart > 0) {
  console.log("Continue to checkout"); // output: Continue to checkout
}

const speed = 80;
if (speed > 60) {
  console.log("You are driving above the speed limit!"); // output: You are driving above the speed limit!
}

const day = "Saturday";
if (day === "Saturday" || day === "Sunday") {
  console.log("It's the weekend!"); // output: It's the weekend!
}

const balance = 150;
if (balance >= 100) {
  console.log("You have sufficient funds."); // output: You have sufficient funds.
}

const hasPremium = false;
const hasSubscription = true;
if (hasPremium || hasSubscription) {
  console.log("Log in Successful!"); // output: Log in Successful
}

