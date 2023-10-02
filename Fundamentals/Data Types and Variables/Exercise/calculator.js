function calculator(number, operator, secondNumber) {
    let result = 0;
    if (operator === "+") {
        result = number + secondNumber;
    } else if (operator === "-") {
        result = number - secondNumber;
    } else if (operator === "*") {
        result = number * secondNumber;
    } else if (operator === "/") {
        result = number / secondNumber;
    }
    console.log(result.toFixed(2));
}
calculator(5, '+', 10);
calculator(25.5, '-', 3);
calculator(5, '+', 10);