// a promise
let delayedPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Data loaded'); 
    }, 3000); // simulates a delay of 3 seconds
});

// async function
async function loadData() {

    // wait until the promise resolves
    let result = await delayedPromise; 

    console.log(result); // logs "Data loaded"
    console.log('Processing complete'); // logs "Processing complete"
}

// calling the async function
loadData();
