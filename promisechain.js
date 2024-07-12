// returns a promise
let fetchData = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Data fetched");
    }, 2000); // simulates a delay in data fetching
  });
  
  // executes when promise is resolved successfully
  
  fetchData
    .then(function successValue(result) {
      console.log(result); // logs "Data fetched"
      return "Processing data"; // returns a new value for the next .then() block
    })
    .then(function successValue1(result) {
      console.log(result); // logs "Processing data"
      return "Data processed"; // returns another value for the next .then() block
    })
    .then(function successValue2(result) {
      console.log(result); // logs "Data processed"
      console.log("You can chain multiple functions this way.");
    })
    .catch(function errorValue(error) {
      console.log(error); // handles any errors that might occur in the promise chain
    });
  