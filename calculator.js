const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the value of number1: ', number1 => {
    readline.question('Enter the value of number2: ', number2 => {
        readline.question('Enter an operator ( either +, -, * or / ): ', operator => {
            number1 = Number(number1);
            number2 = Number(number2);
            let result;

            switch (operator) {
                case "+":
                    result = number1 + number2;
                    console.log(`${number1} + ${number2} = ${result}`);
                    break;

                case "-":
                    result = number1 - number2;
                    console.log(`${number1} - ${number2} = ${result}`);
                    break;

                case "*":
                    result = number1 * number2;
                    console.log(`${number1} * ${number2} = ${result}`);
                    break;

                case "/":
                    result = number1 / number2;
                    console.log(`${number1} / ${number2} = ${result}`);
                    break;

                default:
                    console.log("Invalid operator");
            }
            readline.close();
        });
    });
});
