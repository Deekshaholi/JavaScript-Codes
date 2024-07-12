async function fetchData() {
    console.log('Fetching data...');
    return Promise.resolve("Data fetched successfully");
}

fetchData().then(function(result) {
    console.log(result); // Logs "Data fetched successfully"
});
