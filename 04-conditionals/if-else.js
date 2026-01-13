/* Javascript If-Else Statement

if-else statement is used to execute a block of code if the same condition is false.
Only one block of code executes at any given time, never both. */


const hasAccount = true;
const hasMembership = false;
const canAccess = hasAccount && hasMembership;

if (canAccess) {
  console.log("Access granted!");
} else {
  console.log("Access denied!"); // output: Access denied!
}

/* Exercise 1: Age check
Create a variable age.
If age is 18 or older, print "You can vote"  , Otherwise, print "You cannot vote" */

// const age = 16;
// if (age >= 18) {
//   console.log("You can vote");
// } else {
//   console.log("You cannot vote"); // this runs because age is less than 18
// }

/* Exercise 2: Password length
Create a variable password.
If the password length is at least 8 characters, print "Password is strong"
Else, print "Password is too short" */

const password = "mypassword123";
if (password.length >= 8) {
  console.log("Password is strong"); // this runs because the length of password is 13
} else {
  console.log("Password is too short");
}

/* Exercise 3: Temperature
Create a variable temperature.
If temperature is greater than 25, print "It's hot outside"
Else, print "It's not hot outside" */

const temperature = 25;
if (temperature > 25) {
  console.log("It's hot outside");
} else {
  console.log("It's not hot outside"); // this runs because temperature is not greater than 25
}

/* Exercise 4: Login status
Create a boolean isLoggedIn.
If isLoggedIn is true, print "Welcome back!"
Else, print "Please log in" */

// const isLoggedIn = false;
// if (isLoggedIn) {
//   console.log("Welcome back!");
// } else {
//   console.log("Please log in"); // this runs because isLoggedIn is false
// }

/* Exercise 5: Even or odd
Create a variable number.
If the number is even, print "Even number"
Else, print "Odd number"   */

const number = 102;

if (number % 2 === 0) {
  console.log("Even number"); // this runs because 102 is even
} else {
  console.log("Odd number");
}

/* Exercise 6: Shopping cart
Create a variable itemsInCart.
If items are more than 0, print "Proceed to checkout"
Else, print "Your cart is empty"  */

const itemInCart = 3;
if (itemInCart > 0) {
  console.log("Proceed to checkout"); // this runs because itemsInCart is 3 which is more than 0.
} else {
  console.log("Your cart is empty");
}

/* Exercise 7: Weekend check
Create a variable dayOfWeek (0 for Sunday, 1 for Monday, ..., 6 for Saturday).
If dayOfWeek is 0 or 6, print "It's the weekend!"
Else, print "It's a weekday" */

const dayOfWeek = 5;
if (dayOfWeek === 0 || dayOfWeek === 6) {
  console.log("It's the weeekend");
} else {
  console.log("It's a weekday"); // this runs because dayOfWeek is 5 (Friday)
}

/* Advanced If-Else Exercises - nested if-else statements
Exercise 1: Secure Login System
First check if user is logged in, If logged in:
Check if email is verified, If verified → "Access granted"
Else → "Verify your email", Else → "Please log in" */

const isLoggedIn = true;
const isEmailVerified = false;

if (isLoggedIn) {
  if (isEmailVerified) {
    console.log("Access granted");
  } else {
    console.log("Verify your email"); // this runs because isEmailVerified is false
  }
} else {
  console.log("Please log in");
}

/* Exercise 2: Driving Eligibilty
First check age, If age is 17 or older: Check license
If has license → "You can drive", Else → "You need a license"
Else → "You are too young to drive" */

const age = 18;
const hasLicense = false;

if (age >= 17) {
  if (hasLicense) {
    console.log("You can drive");
  } else {
    console.log("You need a license"); // this runs because hasLicense is false
  }
} else {
  console.log("You are too young to drive");
}

/* Exercise 3: Checkout process
First check cart, If cart has items: Check payment method
If exists → "Proceed to payment", Else → "Add a payment method"
Else → "Your cart is empty"  */

const itemsInCart = 2;
const hasPaymentMethod = false;

if (itemsInCart > 0) {
  if (hasPaymentMethod) {
    console.log("Proceed to payment method");
  } else {
    console.log("Add a payment method"); // this runs because hasPaymentMethod is false
  }
} else {
  console.log("Your cart is empty");
}

/* Exercise 4: Employee access
First check employee status, If employee: Check badge
If badge → "Enter the building", Else → "Get your badge"
Else → "Access denied" */

const isEmployee = true;
const hasBadge = false;

if (isEmployee) {
  if (hasBadge) {
    console.log("Enter the building");
  } else {
    console.log("Get your badge"); // this runs because hasBadge is false
  }
} else {
  console.log("Access denied");
}

/* Exercise 5: Admin access
First check admin, If admin: Check 2FA
If enabled → "Admin access granted", Else → "Enable 2FA"
Else → "Admin access only" */

const isAdmin = true;
const has2FA = false;

if (isAdmin) {
  if (has2FA) {
    console.log("Admin access granted");
  } else {
    console.log("Enable 2FA"); // this runs because has2FA is false
  }
} else {
  console.log("Admin access only");
}


/* Exercise 6: Check Website availability
First check server, If online: Check maintenance
If active → "Site under maintenance", Else → "Website live"
Else → "Server offline" */

const serverOnline = true;
const maintenanceMode = false;

if (serverOnline) {
  if (maintenanceMode) {
    console.log('Site under maintenance');
  } else {
    console.log('Website live'); // this runs because maintenanceMode is false
  }
} else {
  console.log('Server offline');
}