// strings
// String methods

// let message = "Hello Abdalla";

// // to find the length
// console.log(message.length);

// // to uppercase/lowercase
// console.log(message.toUpperCase());

// console.log(message.toLowerCase());

// // to get character position
// console.log(message[5]);
// console.log(message[12]);

// // find substring
// console.log(message.indexOf("Abdalla"));

// // extract substring
// console.log(message.slice(3, 11));

// // replace
// console.log(message.replace("Hello", "Welcome"));
// console.log(message.replace("Hello", "Greetings"));

// // split into array
// console.log(message.split(""));
// console.log(message.split(" "));

// // concatenation
// const result = 50 + "x";
// console.log(result);
// console.log(typeof "result"); //string

// // template literals
// const goal = ` I want to be a Full Stack Developer`;
// console.log(goal);

const firstName = "Abdirahman";

// console.log(firstName.length); // 10

// console.log(firstName.toUpperCase()); // ABDIRAHMAN

// console.log(firstName.toLowerCase()); // abdirahman

// console.log(firstName[7]); // m
// console.log(firstName[0]); // A

// console.log(firstName.indexOf('an')); // 8
// console.log(firstName.indexOf('n')); // 9

// console.log(firstName.slice(0,4)); // Abdi
// console.log(firstName.slice(4,7)); // rah
// console.log(firstName.slice(7,11)); // man

// // another way to replace:
// const newName = firstName.replace("Abdirahman", "Ibrahim");
// console.log(newName); // Ibrahim

// const newStudent = newName.replace("Ibrahim", "Abdalla");
// console.log(newStudent); // Abdalla
// console.log(newStudent.replace("Abdalla", "AAMIR"));

// const fullName = 'Abdalla Dahir Moalim';
// console.log(fullName.split(''));
// console.log(fullName.split(','));
// console.log(fullName.split(' '));


// template literals
const lastName = 'Abdalla';
const newName = 'Ali';
console.log(`${lastName} ${newName}`);

// checking type
console.log(typeof lastName);
console.log(typeof 40);
console.log(typeof true);