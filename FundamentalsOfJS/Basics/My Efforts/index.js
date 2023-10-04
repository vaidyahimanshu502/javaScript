

let nums = [4,9,16,25];
nums.map((ele) => {  
    console.log(Math.sqrt(ele));
})

//declaring global variable inside the function

// function f() {
//     window.a=10;
//     window.value = 10;
// }
// f()                      // FUNCTION SHOULD BE CALLED TO Assign the VALUE
// console.log(window.a)
// console.log(window.value)

//apply()

const person ={
     details: function() {
        return this.name +" " + this.rall;
     }
}

const student = {
    name: 'manni',
    rall: 24
}
console.log(person.details.apply(student))
// person.details.apply(student)

// with arguement
const person1 = {
    details: function(city, country) {
        return this.fname +" "+ this.lname+" "+ city+" "+ country;
    }
}

const student1 = {
    fname: "Manni",
    lname: 'Arora'
}

console.log(person1.details.apply(student1, ["Delhi", "India"]));  // Apply Method takes arguement as an array

//call() 
const person2 = {
    details: function(city, country) {
        return this.fname +" "+ this.lname+" "+ city+" "+ country;
    }
}

const student2 = {
    fname: "Manni",
    lname: 'Arora'
}

console.log(person1.details.call(student2, "Delhi", "India"));  // It takes arguement separataly rather than array

//bind()

const person4 = {
    fname: "MANII",
    lname: "Arora",
    fullName: function() {
        return this.fname +" "+this.lname;
    }
}

const partner = {
    fname: "HIMANSHU",
    lname: "VAIDYA"
}

let partnerNameOfMani = person4.fullName.bind(partner);

console.log(partnerNameOfMani());
// console.log(fullName().toString())


//creating object by constructor
function emp(id, name, salary) {
    this.id= id,
    this.name= name,
    this.salary = salary

    this.changeSalary = changeSalary; // custom method for object
    this.getObj = getObj // getter
}

//defining custom method
 function changeSalary(newSalary) {
    this.salary = newSalary;
 }

 //defining getter
 function getObj() {     //we can also set getters and setters for objects
    return this.id+' '+this.name+' '+this.salary; //similorally we can also create setter
 }
 //creating object
 var emp1 = new emp(10, "Manni Arora", 40000)
 console.log(emp1);

 emp1.changeSalary(45000)
 console.log(emp1)

 //calling getter function for the emp1;
 console.log(emp1.getObj());



 //Objects in builds methods
 //[1]:-Object.create

 const employee = {
    name:'Manni Arora',
    role: 'Diamond',
    salary: 500000
 }

 const anotherEmp = Object.create(employee)
 anotherEmp.name="Himanshu Vaidya"

 console.log(anotherEmp)

 //[2]:-Object.keys()

 var employee1 = {
    name:'manni Arora',
    age:22,
    education:'BCA'
 }
 
 const keys = Object.keys(employee1);
 console.log(keys) //it returns arrays of keys

 //itteration on keys
 keys.forEach(key =>[
    console.log(`${key} : ${employee1[key]}`) // since keys = array therefore accessing value as employee1[key]
 ])


 //[3]:- Object.value()
 const st = {
    name: 'Manni Arora',
    rall: 24,
    age: 20,
    class: 'UKG'
 }

 const values = Object.values(st);  // returns array of values 

 values.forEach((value) => {
    console.log(`Student details :- ${value}`)
 });

 //[4] :- Object.assign()

 let wifeName = {
    name: 'Manni Arora',
    rall: 24,
    age: 20,
    class: 'UKG'
 }

 let husbandName = {
    name: 'Himanshu Vaidya',
    rall: 23,
    age: 27,
    class: 'LKG'
 }

 let updatedWifeName = Object.assign(wifeName, husbandName); // here it doesn't creating new object it assigns the value of
 console.log('updatedObject',updatedWifeName);       // husbandName into wifeName Object 


// printing both object into a single object by using array of objects
let relation = [wifeName,husbandName];
console.log(relation)

//or we can also write it for----for printing both husband and wife name you should comment out the lineNo-74 and 75
let relation1 = {wife: wifeName, husband: husbandName}
console.log(relation1)

//[5] :- Object.getPrototypesOf()
let empGroup = {firstEmp:"Manni Arora", secondEmp:"Himanshu Vaidya"};
console.log(Object.getPrototypeOf(empGroup)) //To see the correct output run this in browsers console

//[6]:-Object.freeze()
let obj = {
    username: 'Himanshu',
    password: 'ManniArora'
}
const newUser = Object.freeze(obj);
obj.password = "123456";
console.log(newUser) // password doesn't change it still - "ManiArora";