
// Callback Function Example
function wish(name, myFunction) {
    console.log('nice to meet you');

    
    myFunction(name);
}

// callback function
function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(wish, 5000, 'Sneha', sayName);