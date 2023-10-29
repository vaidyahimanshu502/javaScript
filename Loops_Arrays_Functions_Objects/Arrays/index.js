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

cities[10] = "Delhi";
console.log(cities);

/**Adding element in Array */
// push()--
const stNames = ["Rajesh", "Vishal", "Rohan", "Rousan", "Rounak"];
stNames.push("Mohan"); // Add at the end of the array
console.log(stNames);
const pushedArr = stNames.push("Jagdish");
console.log(pushedArr); // Returning us the length of the array.

// unshift()---
stNames.unshift("Sudhanshu"); // adds at the starting of the array
console.log(stNames);
const unshiftedArr = stNames.unshift("Jagat"); // returns length of the array
console.log(unshiftedArr);

/**Removing elements to the array */
// pop()---
stNames.pop(); // Removes the last element
console.log(stNames);
const popedArr = stNames.pop(); // returns popped element
console.log(popedArr);

// shift()---
stNames.shift(); // Removes the first element from the array
console.log(stNames);
const shiftedElement = stNames.shift();
console.log(shiftedElement); // it also returning me the deleted element

// checks
stNames.unshift("S", "Y", "Z");
console.log(stNames);

/**Check if element present in array or not */
// indexOf() ---
let indexOfZ = stNames.indexOf("Z"); // returns index of targeted element
console.log(indexOfZ);
console.log(stNames.indexOf("MAAAAaaaaaaaaa")); // if element is not present then it returns -1.

// includes();
let hasJagran = stNames.includes("Jagrans"); // returns false it element is not present
console.log(hasJagran);
console.log(stNames.includes("Rousan")); // if present then it returns true

/**slice()  && splice()*/
//slicce()---
console.log(stNames);
console.log(stNames.slice(2)); // it will removes 2 elements from the begining of the array.
/**Note this is not make change in the original array it is generaly used to break down
     the arry in the chunks. 
                    If we give negative value then it returns only last -ve valued */

console.log(stNames.slice(-2)); //it removes all elements except last two elements.

//splice()---
/**
         It takes generaly three arguements
           1. Position where you want to insert the element.
           2. Number of elements you want to delete.
           3. Element which you want to add.
                                            */
stNames.splice(3, 0, "Mohini");
console.log(stNames);
stNames.splice(2, 2, "Geeta");
console.log(stNames);

//concat()---
let fruitsOne = ["Apple", "Guava", "Grapes"];
let fruitsTwo = ["Banana", "Papaya", "PineApple"];

let concatenatedArr = fruitsOne.concat(fruitsTwo);
console.log(concatenatedArr);

// Problems ----------------------------------
//complete the reverseString Function.
//Do not alter the starter Code.

function reverseString(str){
    //Implement Your function here
               // Method 1
    //     let n = str.length;
    //     let reversedStr = "";
    //     for(let i = n-1; i >= 0; i--) {
    //         reversedStr += str[i];
    //     }
        
        // Method 2
         let reversedStr = str.split("").reverse().join("");
        // return reversedStr;
        
        // return reversedStr;
        return reversedStr
    }
    console.log(reverseString("Hello"));
    //Output : "olleH"


       /**Looping over the array */
let listOfStudents = ['Gopal', 'Teena','Mohan', 'Sohan', 'Geeta'];
for (let i = 0; i < listOfStudents.length; i++) {
    console.log(`Rall no ${i+1} : ${listOfStudents[i]}.`);
}

//Complete the deleteOccur function
//Do not alter the starter Code.
let array = [23, 56, 4, 78, 5, 63, 45, 210, 56];
let ele = 56;
function deleteOccur(arr,ele){
   //Implement Your function here
     for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === ele) {
            array.splice(i, 1);
        }
    }
    return array;
};

console.log(deleteOccur(arr,ele));
//Output: [23,4,78,5,63,45,210];