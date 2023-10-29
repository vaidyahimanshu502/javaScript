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

