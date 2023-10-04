console.log("Hello Fundamentals!");
// Variables in JavaScript
// const , let, var // ----- Naming of variables should be - number, alphabet, $, and _

let age = 10;
console.log(age);
age = "Ten";
console.log(age);

let firstChildAge = 20;
var secondChildAge = 30;
const thirdChildAge = 35;

console.log(firstChildAge);
console.log(secondChildAge);
console.log(thirdChildAge);

let name; // This is Declaration
name = "Himanshu"; // This is Definition
console.log(name);

const movieName = "The man who knew infinity!";
console.log(movieName);

// We can not do like this
/*  movieName = "Dabanggg!";
         console.log(movieName);  */

/*   // DATA-TYPES //  ---> Primitives

        1. Number
        2. String
        3. Boolean
        4. Undefined
        5. Null
        6. NaN
        7. Symbol
        8. BigInt
      
      */

// Examples----
let num = 10;
console.log(typeof num); // typeof keyword let us know the data-type of variables
let yes = true;
console.log(typeof yes);
let myName = "Himanshu";
console.log(typeof myName);
console.log(typeof croc);
let NULL = null;
console.log(typeof NULL);
let number =
  11111111111111111111111999999999999999999999999999999999999999999999999999999n;
console.log(typeof number); // bigint
// let symbol = $;
// console.log(typeof symbol);
console.log(typeof 5 / 0);
const book = "Himanshu's Book!";
console.log(typeof book);
// const bookName = 'Himanshu's book!' this throw error bcz it will consider ony 'Himanshu' as a String.

const a = null;
console.log(typeof a); // it will gives an Object as a output

/* // Intresting Facts //
        |
        |
        |      */
console.log(Number.EPSILON);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE * 10); // it will returns infinity.
console.log(12 / 0); // infinity
console.log(12 / Infinity); // 0
console.log(Infinity / Infinity); // NaN



                     /*     // Operators In JS //
                                     |                 */
    // Arithmatic Operators -------------  [+, -, *, /, %, **, ++, --]

console.log(5+4); // ----- 9
console.log(10/5); // -------- 2
console.log(10 % 5); // ---- 0
console.log(2 ** 3) // ---- 8 [** = Exponent(power)]
let x = 10
x++ // Increment Operator
x-- // Decrement Operators
   
   // Assignment Operators -------------- [=, +=. -=, *=, %=, /=, **=]

   let intNum = 5
console.log(intNum **= 2) // 25

   // Camparision Operators ------------- [<, >, ==, ===, <=, >=, !=, !==]

console.log(5 > 2) // true
console.log(4 === '4') // false [strict equal to]
console.log(4 !== '4') // true [Strict not equal]



  // Logical Operators ------------ [&&, ||, !]

  // Bitwise Operators ---------------- [&, |, ^, ~, >>, <<]
       /*     0, ' ', null, undefined, NaN, false are false in JS       */ 
console.log(true && NaN); // NaN
console.log(true && 1);   // 1
console.log(5 && 1);  // 1 [Because && Operatirs returns us last truthy and first falsy]
console.log(NaN && 1);  // NaN
 /** NOTE:- Similorly || Operators returns 1st Truthy and Last Falsy */
console.log(0 || false || " " || 1); // " "
console.log(1 || false || " " || 0); // 1

         /**     //  Type Coersion   //
          *                |
          *                |
               */

console.log((Number)('5'))
console.log('5' + 5) // 55
console.log('55' - 10) // 45 when we write - String will convert into integer.
console.log('55'*2) // 110

      /**        // Type Conversion //
       *                  |
       *                  |
                            */


