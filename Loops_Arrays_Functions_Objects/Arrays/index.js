//  Arrays in JavaScript       //

const students = ["Mohan", "Alexa", "Google", "Manoj"];
console.log(students);

const cars = new Array("BMW", "VOLVO", "FERARI");
console.log(cars);

const arr = ["Himanshu", "Apple", 10, true];
console.log(arr);

console.log(students[2]);

// Arrays Methods //

                       /**Calculating length of an array */
const cities = ["Jaipur", "Mumbai", "Chennai", "Hydrabad", "Haryana"];
let arrLen = cities.length;
console.log(arrLen);

cities[2] = "Punjab";
console.log(cities);

cities[10] = 'Delhi';
console.log(cities);
                  
                    /**Adding element in Array */
// push()--
const stNames = ["Rajesh", "Vishal", "Rohan", "Rousan", "Rounak"];
stNames.push("Mohan"); // Add at the end of the array
console.log(stNames);
const pushedArr = stNames.push("Jagdish");
console.log(pushedArr);  // Returning us the length of the array.

// unshift()---
stNames.unshift("Sudhanshu"); // adds at the starting of the array
console.log(stNames);
const unshiftedArr = stNames.unshift("Jagat"); // returns length of the array
console.log(unshiftedArr);
           
                  /**Removing elements to the array */
// pop()---
stNames.pop();  // Removes the last element
console.log(stNames);
const popedArr = stNames.pop(); // returns popped element
console.log(popedArr);

// shift()---
stNames.shift();  // Removes the first element from the array
console.log(stNames);
const shiftedElement = stNames.shift();
console.log(shiftedElement); // it also returning me the deleted element


