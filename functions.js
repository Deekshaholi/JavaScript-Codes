/* create a function
function greeting() {
    console.log("Hello,nice to meet you!");
}

// call the function
greeting();

console.log("outside the function");*/


/*function with a parameter called 'name'
function greeting(name) {
    console.log(`Hello ${name}`);
}

// pass argument to the function
greeting("John");*/

// Output: Hello John

/* function to find cube of a number
function findCube(num) {

    // return square
    return num * num * num; 
}

// call the function and store the result
let Cube = findCube(3);

console.log(`Cube: ${Cube}`);*/


function greet() {

    // local variable
    var message = "Hello";
    
    console.log(`Local: ${message}`);
}

greet();

// try to access message variable
// outside the greet() function
console.log(`Global: ${message}`);