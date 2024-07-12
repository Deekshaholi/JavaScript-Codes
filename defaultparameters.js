function sum(a = 10, b = 5) {
    // return sum
    return a + b;
}


var result = sum(5, 12);
console.log(`Sum of 5 and 12: ${result}`);

// pass argument to a but not to b
result = sum(9);
console.log(`Sum of 9 and default value (5): ${result}`);

// pass no arguments
//use default parameters
result = sum();
console.log(`Sum of default values (10 and 5): ${result}`);