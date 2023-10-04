// Email verification system.
/**Conditions-
 *   1. length of email > 11
 *   2. after . only 3 or 2 characters allowed
 *   3. minimum 2 or 3 characters between @ and .
 */
function emailVarification(email) {
  let n = email.length;
  // console.log(n)

  let dotIndex = email.lastIndexOf(".");
  // console.log(dotIndex) // 23
  // console.log(n) // 27
  let atIndex = email.lastIndexOf("@");
  //   console.log(atIndex) // 17
  let lastIndex = n - 1;

  if (
    n < 11 ||
    lastIndex - dotIndex < 2 ||
    lastIndex - dotIndex > 3 ||
    dotIndex - atIndex < 3
  ) {
    console.log("Invalid Email!");
  } else {
    console.log("Valid Email!");
  }
}
emailVarification("vaidyahimanshu502@gmail.com");

// logics
let x = 0;
if (x++) {
  console.log("The value of x is not zero.");
} else if (x == 0) {
  console.log("The value of x is zero.");
} else {
  console.log("Both conditions are false.");
}

// Grading system
//Write a program to determine the grade of the student
//Determine the grade and assign it to the result variable.
//Do not alter anything else given in the starter code
function main(marks) {
  let result;
  //write your code here
  if (marks >= 90) {
    result = "A grade";
    // console.log("A grade")
  } else if (marks >= 80) {
    result = "B grade";
    // console.log("B grade")
  } else if (marks >= 70) {
    result = "C grade";
    // console.log("C grade")
  } else if (marks >= 60) {
    result = "D grade";
    // console.log("D grade")
  } else {
    result = "F grade";
    // console.log("F grade")
  }

  return result;
}
