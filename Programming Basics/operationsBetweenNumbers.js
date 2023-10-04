function operationsBetweenNumbers(args) {
    let num1 = Number(args[0]);
    let num2 = Number(args[1]);
    let operator = args[2];

    let result = 0;
    let evenOrOdd = "";
    if (operator === "+") {
        result = num1 + num2;
        if (result % 2 === 0) {
            evenOrOdd = "even";
        }
        else {
            evenOrOdd = "odd";
        }
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`);
    }
    else if (operator === "-") {
        result = num1 - num2;
        if (result % 2 === 0) {
            evenOrOdd = "even";
        }
        else {
            evenOrOdd = "odd";
        }
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`);
    }
    else if (operator === "*") {
        result = num1 * num2;
        if (result % 2 === 0) {
            evenOrOdd = "even";
        }
        else {
            evenOrOdd = "odd";
        }
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`);
    }
    else if (operator === "/") {
        result = num1 / num2;
        if (num2===0){
            console.log(`Cannot divide ${num1} by zero`);
        }
        else {
        console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
        }
    }
    else if (operator === "%") {
        result = num1 % num2;
        if (num2===0){
            console.log(`Cannot divide ${num1} by zero`);
        }
        else {
        console.log(`${num1} % ${num2} = ${result}`);
        }
    }
}
operationsBetweenNumbers(["10", "12", "+"]);
operationsBetweenNumbers(["10","0","%"]);
operationsBetweenNumbers(["123",
"12",
"/"])


