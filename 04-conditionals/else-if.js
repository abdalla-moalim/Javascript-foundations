/* Javascript else-if Statement

else-if statement is used to specify a new condition to test,
if the first condition is false. You can have multiple else-if blocks
to test different conditions. */

/* Exercise 1: Driving eligibility
If age is 18 or above and has a license → "You can drive"
Else if age is below 18 → "You must be at least 18 years old to drive"
Else if does not have a license → "You need a license to drive"  */

const age = 21;
const hasLicense = false;
const canDrive = age >= 18 && hasLicense;

if (canDrive) {
  console.log("You can drive"); 
} else if (age < 18) {
  console.log("You must be at least 18 years old to drive"); 
} else {
  console.log("You need a license to drive"); // this runs because hasLicense is false
}

/* Exercise 2: Grading system
If score is 90 or above → "Grade A"
Else if score is 75 or above → "Grade B"
Else if score is 60 or above → "Grade C"
Else → "Fail"  */

const score = 110;
if (score > 100 || score < 0) {
  console.log("Invalid score"); // this runs because score is > 100
} else if (score >= 90) {
  console.log("Grade S");
} else if (score >= 70) {
  console.log("Grade A");
} else if (score >= 50) {
  console.log("Grade B");
} else {
  console.log("Fail");
}

/* Exercise 3: User Role
If role is "admin" → "Full access", Else if role is "editor" → "Edit access"
Else if role is "viewer" → "Read-only access", Else → "No access"  */

const role = "visitor";
if (role === "admin") {
  console.log("Full access");
} else if (role === "editor") {
  console.log("Edit access");
} else if (role === "viewer") {
  console.log("Read-only access");
} else {
  console.log("No access"); // this runs because role is 'visitor'
}

/* Exercise 4: Traffic Light
If light is "green" → "Go", Else if light is "orange" → "Slow down"
Else if light is "red" → "Stop", Else → "Invalid light" */

const light = "white";
if (light === "green") {
  console.log("Go");
} else if (light === "orange") {
  console.log("Slow down");
} else if (light === "red") {
  console.log("Stop");
} else {
  console.log("Invalid light"); // this runs because light is 'white'
}

/* Exercise 5: Temperature Check
If temperature >= 30 → "It's very hot", Else if temperature >= 20 → "It's warm"
Else if temperature >= 10 → "It's cool", Else → "It's cold" */

const temperature = -1;
if (temperature >= 30) {
  console.log("It's very hot");
} else if (temperature >= 20) {
  console.log("It's warm");
} else if (temperature >= 10) {
  console.log("It's cool");
} else {
  console.log("It's cold"); // this runs because temperature is -1
}

/* Exercise 6: Login Attempts
If attempts === 0 → "Account locked", Else if attempts <= 2 → "Last warning"
Else if attempts <= 5 → "You can try again", Else → "Invalid attempt count" */

let attempts = 0;
if (attempts === 0) {
  console.log("Account locked"); // this runs because attempts is 0
} else if (attempts <= 2) {
  console.log("Last warning");
} else if (attempts <= 5) {
  console.log("You can try again");
} else {
  console.log("Invalid attempt count");
}

/* Exercise 7: Shopping Discount
If totalAmount >= 200 → "20% discount", Else if totalAmount >= 100 → "10% discount"
Else if totalAmount >= 50 → "5% discount", Else → "No discount" */

const totalAmount = 10;
if (totalAmount >= 200) {
  console.log("20% discount");
} else if (totalAmount >= 100) {
  console.log("10% discount");
} else if (totalAmount >= 50) {
  console.log("5% discount");
} else {
  console.log("No discount");
}

/* Exercise 8: Age Group
If age >= 65 → "Senior", Else if age >= 18 → "Adult"
Else if age >= 13 → "Teenager", Else → "Child" */

const ageGroup = 10;
if (ageGroup >= 65) {
  console.log("Senior");
} else if (ageGroup >= 18) {
  console.log("Adult");
} else if (ageGroup >= 13) {
  console.log("Teenager");
} else {
  console.log("Child"); // this runs because ageGroup is 10
}

/* Exercise 9: subscription Plan
If plan is "premium" → "All features unlocked", Else if plan is "standard" → "Most features unlocked"
Else if plan is "basic" → "Limited features", Else → "Invalid plan" */

const plan = "free";
if (plan === "premium") {
  console.log("All features unlocked");
} else if (plan === "standard") {
  console.log("Most features unlocked");
} else if (plan === "basic") {
  console.log("Limited features");
} else {
  console.log("Purchase a plan"); // this runs because plan is 'free'
}

/* Exercise 10: check internet speed
If speed >= 100 → "Excellent", Else if speed >= 50 → "Good"
Else if speed >= 20 → "Average", Else → "Poor" */

const speed = 49;
if (speed >= 100) {
  console.log("Excellent speed");
} else if (speed >= 50) {
  console.log("Good speed");
} else if (speed >= 20) {
  console.log("Average speed"); // this runs because speed is 49
} else {
  console.log("Poor speed"); //
}
