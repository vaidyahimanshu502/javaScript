//  Functions --- For reuse the written codes. //
function greetUser() {
  console.log("Hello, Welcome to the Web Page!");
}

greetUser();

// Parameterised :-
function welcomeUser(username) {
  console.log("Hello, " + username + " Welcome to the Web Page!");
}
welcomeUser("Himanshu");
welcomeUser("Sis");

// Checking for valid identifier of varialbes

function isValidIdentifier(identifier) {
  if (identifier === "" || !isNaN(identifier[0])) {
    console.log(identifier + " is not a valid identifier.");
    return;
  } else {
    flag = true;
    for (var i = 0; i < identifier.length; i++) {
      var char = identifier[i];

      // Check if the character is a letter, digit, underscore, or dollar sign
      if (
        !(
          (
            (char >= "a" && char <= "z") ||
            (char >= "A" && char <= "Z") ||
            char === "_" ||
            char === "$" ||
            (!isNaN(char) && i > 0)
          ) // Allow digits after the first character
        )
      ) {
        flag = false;
        //   console.log(identifier + " is not a valid identifier.");
      }
    }
    if (flag) {
      console.log(identifier + " is a valid identifier.");
    } else {
      console.log(identifier + " is not a valid identifier.");
    }
  }
}

// Example usage
isValidIdentifier("myVariable"); // Logs: myVariable is a valid identifier.
isValidIdentifier("123abc"); // Logs: 123abc is not a valid identifier.
isValidIdentifier("_pr&ivate"); // Logs: _pr&ivate is not a valid identifier.

// ES-6 :- Template Literals :::::-----
function sum(num1, num2) {
  console.log(`The sum of these two numbers is ${num1 + num2}.`);
}
sum(20, 15);

// Default Parameters :::::::----
function sub(num1 = 0, num2 = 0) {
  console.log(`Differences between these two numbers is ${num1 - num2}`);
}
sub(4, 2); //Differences between these two numbers is 2

sub(4); //Differences between these two numbers is 4
sub(); //Differences between these two numbers is 0

// Returning value from a function ::::::::::-------
function square(num) {
  return num * num;
}
let square5 = square(5);
console.log(square5);
let square15 = square(15);
console.log(square15);

// if there are multiple returns then it will return last value :::::::::::---
function getValue() {
  return 5, "Himanshu", true;
}
let result = getValue();
console.log(result);
