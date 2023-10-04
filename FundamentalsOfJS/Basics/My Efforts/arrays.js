/*In js array is an objects that represents a collection of simial types of elements
      CUNSTRUCTION OF  ARRAYS
            |
---------------------------------------------------------------------
|                                |                                   |
Literals                      Using New Keyword                     By using constructor
    |                             |                                    |
var arr = [1.2.3.4]      var arr = new Array();          var arr = new Array(1,2,3,4,"MANNI DARLING");
                             arr[0] = 1;,
                             arr[1] = 3;
                             aer[3] =  "MANNI DARLING"

ARRAY-INBUILDS Methods---------- SEE BELLOw MANNI DARLING
          */

//[1]:- Array.some()-Check whether atleast a single element of an array satisfy condition or
// not It returns true or false
function isGreaterThan5(element, index, arr) {
  return element > 5;
}
var arr = [3, 5, 8, 7, 9, 2, 1];
let x = arr.some(isGreaterThan5);
console.log(x);

/*[2]:-Array.reduce() - used to reduce the array into a single value and execute a provided function for each element of 
of the array [From Left To Right]*/
let arr1 = [89, 50, 25, 10];
let y = arr1.reduce((total, num) => {
  return total - num;
});
console.log(y);

/*[3]:-Array.map()----It returns a new array by calling a specific function on each element*/
let arr2 = [1, 4, 9, 16, 25, 36];
arr2.map((element) => {
  console.log(Math.sqrt(element));
});

/**[4]Array.every()- It checks Whether all the elements pf the array suttisfy the given condition or not
 * It returns true or false
 */
var arr = [11, 89, 23, 7, 98];
function isPositive(element, index, arr) {
  return element > 0;
}
var z = arr.every(isPositive);
console.log(z);

/**[5]:- Array.flat()- used to create a new array of that array which contains multiple arrays */
var arr = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9],
];
let newArr = arr.flat();
console.log(newArr);

/**[6]:- Array.push()-- used to add element at end index */
var array = [1, 2, 3, 4];
array.push(7);
console.log(array);

/**[7]:- Array.unshift()-- used to add element at begining */
var array = [1, 2, 3, 4, 5, 6];
array.unshift(7);
console.log(array);

/**[8]:- Array.pop()--used to delete element at last index */
var array = [1, 2, 3, 4, 5, 6];
array.pop();
console.log(array);

/**[9]:- Array.shift()--- used to delete element from begining  */
var array = [1, 2, 3, 4, 5, 6];
array.shift();
console.log(array);

/**[10]:- Array.splice()--used to insert and delete element at the between of the array */
var array = [1, 2, 3, 4, 5, 6];
array.splice(0, 1, 10, 12, 13); // The 1st arguement tells the index of deleted element and 2nd gives how many
console.log(array); //element wants to delete and rest are added elements

/**[11]:- Array.slice()--Returns new array containing the portion of the elements bassed on indexes provided */
var array = [1, 2, 3, 4, 5, 6];
var z = array.slice(1, 3); //last index not included
console.log(z);

/**[12]:- Array.flatMap()--This first map the elements of the array then flat them */
var array = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8],
];
array.flatMap((element) => {
  var newEle = element.map((num) => {
    return num * 10;
  });
  console.log(newEle);
});

/**[13]:- Array.filter()--This returns new array of those elements which satisfyy the conditions */
var array = [1, 2, 3, 4, 5, 6];
var newArray = array.filter((element) => {
  return element % 2 === 0;
});
console.log(newArray);

/**[14]:- Array.findIndex()-- returns index if not then returns -1 */
var array = [1, 2, 3, 4, 5, 6];
var indx = array.findIndex((element) => {
  return element > 5;
});
console.log(indx);

/**[15]:- Array.find()--used to find the value of the first matched element */
var array = [5, 8, 6, 45, 12, 47, 60];
let found = array.find((element) => {
  return element > 20;
});
console.log(found);

/**[16]:- Array.fill()-- used to fill the elements into the array */
var arr = new Array(10);
arr.fill(5, 0, 10); // first arguement telss what you want to fill, 2nd tells how many empty spaces you want and 3rd
console.log(arr); // tells how many times you want to fill

/**[17]:- Array.sort()----It sorts the array in asscending or descending order as per conditind */
var arr = [5, 6, 2, 7, 4, 3, 10];
arr.sort((a, b) => {
  // in asscending order
  return a - b;
});
console.log(arr);

arr.sort((a, b) => {
  // in descending order
  return b - a;
});
console.log(arr);

/**[18]:- Array.reverse()-- used to reverse the array */
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.reverse();
console.log(arr);
