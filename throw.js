const score = 12;
try {
    if(score > 13 ) {
        console.log('Win');
    }
    else {

        // user-defined throw statement
        throw new Error('The score is low');
    }

    // if throw executes, the below code does not execute
    console.log('held');
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}