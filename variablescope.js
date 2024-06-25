function greeting() {

    // local variable
    var message = "HEY";
    
    console.log(`Local: ${message}`);
}

greeting();

// try to access message variable
// outside the greeting() function
console.log(`Global: ${message}`);