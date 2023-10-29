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
