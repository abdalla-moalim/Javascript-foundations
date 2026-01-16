/* Ternary operator: The ternary operator is a simplified conditional operator like if / else. 
It is a conditional operator that evaluates a condition and returns either true or false.

Syntax: condition ? trueExpression : falseExpression  */

/* example: Age verification: */

// const age = 18;
// const hasAccount = false;
// // const canLogin = age >= 18 && false

// // console.log(canLogin ? true : false);

function verifyAge(age) {
  return age >= 18 ? "Adult" : "Minor";
}
console.log(verifyAge(15));

const hasAccount = true;
const isLoggedIn = false;
const canAccess = isLoggedIn && hasAccount;

if (canAccess) {
  console.log("dashBoard");
} else {
  console.log("createAccount");
}

// can be written in one line as:
const message = hasAccount ? "dashBoard" : "createAccount";
console.log(message); // dashBoard

console.log(canAccess ? "dashBoard" : "createAccount"); // createAccount

function isValidName(name) {
  return name.length >= 3 ? "Name is valid" : "Name is not valid";
}
console.log(isValidName("Ali")); // Name is valid

/* challenge 1:  Login Status Message
Scenario: A website needs to show a message depending on login status.
Task: Write a function getLoginMessage(isLoggedIn) that: 
returns "Welcome back!" if logged in, returns "Please log in" if not
NB: Use ternary */

function getLoginMessage(isLoggedIn) {
  return isLoggedIn ? "Welcome back!" : "Please log in";
}
console.log(getLoginMessage(false)); // Please log in

/* challenge 2: Free shipping checker
Scenario: An online store offers free shipping for orders over £50.
Task: Create a function hasFreeShipping(total) that:
returns "Free Shipping" if total ≥ 50, else returns "Shipping Fee Applies"  */

function hasFreeShipping(total) {
  return total >= 50 ? "Free Shipping" : "Shipping Fee Applies";
}
console.log(hasFreeShipping(40)); // Shipping Fee Applies

/* challenge 3: temperature check
Scenario: A weather app shows a simple label.
Task: Function checkTemperature(temp):
"Hot" if temp > 25, otherwise "Cold" */

function checkTemperature(temp) {
  return temp > 25 ? "Hot" : "Cold";
}
console.log(checkTemperature(15)); // Cold

/* challenge 4: check even or odd
Scenario: Check if a number is even or odd
Task: Function evenOrOdd(number) that:
returns "Invalid number" if input is not an integer
otherwise returns "Even" or "Odd" */

function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    return "Invalid number!";
  }
  return number % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOdd(55)); // odd

/* challenge 5: password check
Scenario: Signup forms often show basic password feedback.
Task: Function checkPasswordLength(password):
"Strong" if length ≥ 8, "Weak" otherwise
NOTE: Ternary only for return, NOT validation. */

function checkPasswordLength(password) {
  return password.length >= 8 ? "Strong" : "Weak";
}
console.log(checkPasswordLength("shfure1")); // Weak

/* challenge 6: Exam result checker:
Scenario: An exam system shows pass/fail.
Task: Function checkResult(score):
"Invalid score" if score < 0 or > 100, "Pass" if score ≥ 50
"Fail" otherwise
Combine: if for validation, ternary for pass/fail decision  */

function checkResult(score) {
  if (score < 0 || score > 100) {
    return "Invalid score";
  }
  return score >= 50 ? "Pass" : "Fail";
}
console.log(checkResult(65)); // Pass

/* challenge 7: Mini project challenge: Form Status Message
Scenario: A form submission result needs a message.
Task: Function getFormStatus(isSubmitted, hasError):
"Form submitted successfully", "Submission failed"
"Waiting for submission"
Rules:
1. Use if for multiple conditions
2. Use ternary inside returns where it makes sense  */

// function getFormStatus(isSubmitted, hasError){
//   if(isSubmitted){
//     return hasError ? "Submission failed" : "Form submitted succesfully";
//   } else {
//     return "Waiting for submission";
//   }
// }
// console.log(getFormStatus(true, true)); // Submission failed because hasError is true

/* OR can be wwritten as: */

function getFormStatus(isSubmitted, hasError) {
  if (!isSubmitted) {
    return "Waiting for submission";
  }
  return hasError ? "Submission failed" : "Form submitted successfully";
}
console.log(getFormStatus(true, true));

/* challenge 8: Acccess checker
Rules: Logged in + admin → Full access
Logged in only → Limited access
Not logged in → No access   */

function canUserAccess(isLoggedIn, isAdmin) {
  if (isLoggedIn) {
    return isAdmin ? "Full access" : "Limited access";
  }
  return "No access";
}
console.log(canUserAccess(true, false));

/* challenge 9: Age validator
Rules: Negative → Invalid, < 18 → Child, ≥ 18 → Adult */

function ageCheck(age) {
  if (age < 0) {
    return "Invalid";
  }
  return age >= 18 ? "Adult" : "Child";
}
console.log(ageCheck(-1)); // Invalid
console.log(ageCheck(13)); // Child
console.log(ageCheck(18)); // Adult



/* challenge 10: Even or Odd (Reusable)
function isEven(number) {
  // return true or false
}
Then use it:
function evenOrOddMessage(number) {
  // uses isEven
}   */

function isEven(number) {
  return number % 2 === 0;
}
console.log(isEven(15)); // false
console.log(isEven(22)); // true

function evenOrOddMessage(number){
  return isEven(number) ? "Even" : "Odd";
}
console.log(evenOrOddMessage(17)); // Odd
console.log(evenOrOddMessage(32)); // Even

/* challenge 11: Shopping Discount
function getDiscountMessage(total) {
  // Validation first
  // Then discount logic
}
Rules:
Invalid number → "Invalid total"
≥ 200 → "20% discount"
≥ 100 → "10% discount"
Else → "No discount" */

function getDiscountMessage(total){
  const amount = Number(total);
  if(Number.isNaN(amount)){
    return "Invalid total"; 
  } else if(total >= 200){
    return "20% discount";
  } else if (total >= 100){
    return "10% discount"; 
  } else {
    return "No discount";
  }
}
console.log(getDiscountMessage("ffygy")); // Invalid total
console.log(getDiscountMessage(588)); // 20% discount
console.log(getDiscountMessage(199)); // 10% discount
console.log(getDiscountMessage(99)); // No discount


/* challenge 12: Login Message
function getLoginMessage(isLoggedIn, username) {
  // return string only
}
Rules: Logged in → "Welcome back, {username}"
Not logged in → "Please log in"   */

function getLoginMessage(isLoggedIn, userName){
  return isLoggedIn ?  `Welcome back, ${userName}` : `Please log in`;
}
console.log(getLoginMessage(true, "Abdalla"));
console.log(getLoginMessage(false, "Abdalla"));

/* challenge 13: Password Strength
function getPasswordStrength(password) {
  // "Invalid", "Weak", "Strong"
}
Rules: Empty → Invalid, < 8 → Weak, ≥ 8 → Strong  */

function getPasswordStrength(password){
  if(password.includes(" ")){
    return "Invalid";
  } 
  return password.length < 8 ? "Weak" : "Strong";
}

console.log(getPasswordStrength("hfh")) // Invalid
console.log(getPasswordStrength("ahfuwehc123")) // Strong
console.log(getPasswordStrength("kuef")); // Weak

/* challenge 14: mini project button
function getButtonLabel(isLoading, hasError) {
  // return button text
}
Rules: Loading → "Loading...", Error → "Try again"
Otherwise → "Submit"  */

function getButtonLabel(isLoading, hasError){
  if(isLoading){
    return "Loading..."
  } 
  return hasError ? "Try again" : "Submit"; 
}
console.log(getButtonLabel(true, false)); // Loading
console.log(getButtonLabel(false, false)); // Submit
console.log(getButtonLabel(false, true)); // Try again
