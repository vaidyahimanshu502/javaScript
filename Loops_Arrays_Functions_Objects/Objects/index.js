/** Objects in JavaScript */
const students = {
  name: "Alexa",
  age: 10,
  hobby: "Football",
  show: function () {
    console.log(this.name + " is " + this.age + " years old.");
  },
};

console.log(students.name);
console.log(students["name"]);
console.log(students.show());
console.log(students);

for (let key in students) {
  console.log(key + " : " + students[key]);
}


// Problems
const studentMarks = {
    John: [85, 90, 92, 88, 87],
    Jane: [92, 95, 89, 91, 94],
    David: [78, 85, 90, 92, 84],
    Emily: [90, 88, 92, 87, 91],
    Michael: [86, 92, 90, 89, 94]
};

function findClassTopper(studentMarks) {
    let highestAverage = -Infinity;
    let topper = "";

    for (let studentName in studentMarks) {
        let total = studentMarks[studentName].reduce((a, b) => a + b, 0);
        let average = total / studentMarks[studentName].length;

        if (average > highestAverage) {
            highestAverage = average;
            topper = studentName;
        }
    }

    return topper;
}

console.log(findClassTopper(studentMarks));
// Output: "Jane"


//complete the calculatePrice function
//Do not alter the starter code
const goods = {
    apple: { price: 150, quantity: 2 },
    banana: { price: 75, quantity: 3 },
    orange: { price: 125, quantity: 1 }
    };    
    function calculatePrice(goods){
        //Implement your function here
        var totalPrice = 0;
        for (let goodsName in goods) {
            totalPrice += goods[goodsName].quantity * goods[goodsName].price;
        }
        return totalPrice
    }
    console.log(calculatePrice(goods));
    //output : 650


    //Complete the URLconstructor function 
// Do not change the starter code. 

function URLconstructor(){
    //Implement Your function here.
        let finalurl = "";
            finalurl += "https://";
            finalurl += domain;
            finalurl += path;
            for( let key in queryParameters){
                finalurl += '?';
                finalurl += key;
                finalurl += '=';
                finalurl += queryParameters[key];
            }
            return finalurl; 
    
    }
    const queryParameters = {name:'John',age:'28'}; 
    const domain = "google.com";
    const path = '/search';
    console.log(URLconstructor(queryParameters,domain,path));
    //output: https://google.com/search?name=John&age=28
