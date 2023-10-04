/**                               // Switches //
 *  Expression------
 *        switch(expression) {
 *
 *              case a:
 *                 break;
 *              case b:
 *                 break;
 *              default:
 *
 *         }
 */

const fruits = ["Apple", "Banana", "Grapes", "Guava", "Papaya"];

for (let fruit of fruits) {
  switch (fruit) {
    case "Apple":
      console.log("Hey, you have selected Apple!");
      break;
    case "Banana":
      console.log("Hey, you have selected Banana!");
      break;
    case "Grapes":
      console.log("Hey, you have selected Grapes!");
      break;
    case "Guava":
      console.log("Hey, you have selected Guava!");
      break;
    case "Papaya":
      console.log("Hey, you have selected Papaya!");
      break;
    default:
      console.log("None of the fruits Selected");
  }
}

// for booleans
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
];

switch (true) {
  case "Sunday":
    console.log("Hey, you have selected a holiday!");

  case "Monday":
    console.log("It's Mahadeva's day!");

  case "Tuesday":
    console.log("It's Hanumana's day!");

  default:
    console.log("Working days!");
}

//Calculating discount problem.

// Write the program to calculate the discount on the given amount
// store the calculated discount in the "discount" variable
// Please do not alter anything given in the starter code
function calculate(amount) {
  let discount;

  // write your code here
  // if(amount < 500) {
  //     discount = "No Discount."
  // } else if(amount >= 500 && amount < 1000) {
  //     discount = "10% Discount."
  // } else if(amount >= 1000 && amount < 2000) {
  //     discount = "20% Discount."
  // } else if(amount >= 2000 && amount < 4000) {
  //     discount = "30% Discount."
  // } else if(amount >= 4000 && amount < 5000) {
  //     discount = "40% Discount."
  // } else {
  //     discount = "50% Discount."
  // }

  switch (true) {
    case amount < 500:
      discount = "No Discount.";
      break;
    case amount >= 500 && amount < 1000:
      discount = "10% Discount.";
      break;
    case amount >= 1000 && amount < 2000:
      discount = "20% Discount.";
      break;
    case amount >= 2000 && amount < 4000:
      discount = "30% Discount.";
      break;
    case amount >= 4000 && amount < 5000:
      discount = "40% Discount.";
      break;
    case amount >= 5000:
      discount = "50% Discount.";
    default:
      discount = "Invalid Discount.";
      break;
  }

  console.log("You Have " + discount);

  return discount;
}

// AccessLevel Problem