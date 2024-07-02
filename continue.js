// nested for loops

// outer loop
for (let i = 1; i <= 3; i++) {

    // inner loop
    for (let j = 1; j <= 3; j++) {
        if (j == 2) {
            continue;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}