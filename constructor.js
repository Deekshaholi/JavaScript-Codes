/* constructor function
function Person () {
    this.name = "John",
    this.age = 23
}

// create an object
const person1 = new Person();
const person2 = new Person();


// print object attributes
console.log(person1.name);
console.log(person2.age);*/


/* constructor function
function Person () {
    this.name = "John"
}

// create object
const person1 = new Person();

// access properties
console.log(person1.name);  */ 




// use constructor function
function Person () {
    this.name = "Sam"
}

let person1 = new Person();
let person2 = new Person();

// add new property to person1
person1.age = 20;

// add a method to person1 object
person1.greet = function () {
    return "hello";
}

console.log(person1.age);  // 20
console.log(person1.greet());  // hello

console.log(person2.age);  // undefined
console.log(person2.greet());  