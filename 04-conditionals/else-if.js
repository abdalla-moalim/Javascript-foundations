/* Javascript else-if Statement

else-if statement is used to specify a new condition to test,
if the first condition is false. You can have multiple else-if blocks
to test different conditions. */

const age = 17;
const hasLicense = false;
const canDrive = age >= 17 && hasLicense;

if (canDrive) {
    console.log('You can drive'); //
} else if (age < 17) {
    console.log('You cannot drive');
} else if (hasLicense) {
    console.log('You need a license to drive'); // this runs because hasLicense is false
} else { 
    console.log('You must be at least 17 years old to drive')
}