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

function reverseString(str) {
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
  return reversedStr;
}
console.log(reverseString("Hello"));
//Output : "olleH"

/**Looping over the array */
let listOfStudents = ["Gopal", "Teena", "Mohan", "Sohan", "Geeta"];
for (let i = 0; i < listOfStudents.length; i++) {
  console.log(`Rall no ${i + 1} : ${listOfStudents[i]}.`);
}

//Complete the deleteOccur function
//Do not alter the starter Code.
let array = [23, 56, 4, 78, 5, 63, 45, 210, 56];
let ele = 56;
function deleteOccur(arr, ele) {
  //Implement Your function here
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === ele) {
      array.splice(i, 1);
    }
  }
  return array;
}

console.log(deleteOccur(arr, ele));
//Output: [23,4,78,5,63,45,210];

// For .. in  && For... of loops
// for ..in
for (let i in listOfStudents) {
  console.log(`Rall no ${1 + +i} : ${listOfStudents[i]}.`); // here i is a string
}

// For... of
for (let student of listOfStudents) {
  console.log(student);
}

// Question finding duplicates in the array
//Complete the findDuplicate function
// Do not alter the starter code.

let arr2 = [4, 2, 34, 4, 1, 12, 1, 4];
function findDuplicate(arr) {
  //Implement your function here
  let duplArrOfEle = new Array();
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        if (!duplArrOfEle.includes(arr[i])) {
          duplArrOfEle.push(arr[i]);
        }
      }
    }
  }
  return duplArrOfEle;
}
console.log(findDuplicate(arr2));

// Breaks vs continue;   -- Problems prints only first 5 even numbers
const inputs = [2, 32, 12, 18, 42, 13, 23, 34, 3, 5, 7, 9, 23];
const evenNo = [];
for (let i of inputs) {
  if (i % 2 != 0) {
    continue;
  }
  evenNo.push(i);
  if (evenNo.length === 5) {
    break;
  }
  console.log(evenNo);
}
console.log(evenNo);

/**Rest vs Spread Operators */

let mayBatch = ["arun", "barun", "tarun", "garun"];
let juneBatch = ["mohan", "sohan", "tohan"];
let julyBatch = ["geeta", "sita", "pita", "fita"];
let augBatch = [];

/** 
function addStudent(batchName, student) {
    if(batchName == mayBatch || batchName == juneBatch || batchName == julyBatch || batchName == augBatch) {
        batchName.push(student);
    }
    return batchName;
}
let batchName = addStudent(mayBatch, 'Sohan');
console.log(batchName); */

// adding more students at a time ---- REST OPERATOR '...'

function addStudents(batch, ...students) {
  for (let i of students) {
    batch.push(i);
  }
  return batch;
}
let batch = addStudents(augBatch, "Mohan", "Sohan", "Dohan", "Pohan");
console.log(batch);

// Spread Operator '...' changes made in old one not couse any changes in the new one

//Expanding / Copying
let newBatch = [...augBatch]; // it spreading all elements of the arry.
console.log(newBatch);
augBatch.push("Geeta");
console.log(augBatch);
console.log(newBatch);

// Containate
let days = ['sunday', 'monday', 'tuesday'];
let days1 = ['wednesday', 'thrusday', 'friday', 'saturday'];

let allDays = [...days, ...days1];
console.log(allDays);


// Solving the problems to find array of unique elemtns from multiples arrays by using SET DataStructure
//complete the function mergeArray
//Do not alter the starter code.
arr4 = [1,2,4,5,7];
arr5 = [3,4,6,7,9,0];
function mergeArray(arr1,arr2){
    //Implemet your function here
    let mergedArray = [...arr1, ...arr2];
    let set = new Set(mergedArray);
    let setOfUniqueElement = [...set];
    return setOfUniqueElement;
}
console.log(mergeArray(arr4,arr5));
//Output : [1,2,4,5,7,3,6,9,0]


