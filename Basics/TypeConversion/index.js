// Converting a number into String by --- String() Method

//For Numbers
console.log(String(100)) // 100
console.log(typeof String(100)) // String

// For Booleans
console.log(String(true)) // true
console.log(typeof String(true)) // String

// For null
console.log(String(null)) // null
console.log(typeof String(null)) // String

// For null
console.log(String(undefined)) // undefined
console.log(typeof String(null)) // String

// Converting a number into String by --- .toString() Method
console.log((123).toString()) // 123 as a String
// console.log((null).toString()) // it will throw an erroe ['null' and 'undefined' not converted into String by using toString()]

// Converting into Number --- by using Number()
console.log(Number("123"))// 123
console.log(Number("Hello")) // NaN

console.log(Number(true)) // 1
console.log(Number(false)) // 0

// Conbersion by using -- unary '+' operator
let a = '125'
console.log(+ a) // 123 as a number
let b = '123hello'
console.log(+ b) // NaN

//parseInt()
console.log(parseInt("12345")) // 12345 as a number

