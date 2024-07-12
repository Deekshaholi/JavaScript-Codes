const isLoggedIn = true;

let userStatus = new Promise(function (resolve, reject) {
    if (isLoggedIn) {
        resolve("User is logged in.");
    } else {
        reject("User is not logged in.");
    }
});

console.log(userStatus);