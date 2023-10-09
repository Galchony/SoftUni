function mathOperations(firstNum, secondNum, str) {
    let result = 0;
    let obj = {
        "+": () => result = firstNum + secondNum,
        "-": () => result = firstNum - secondNum,
        "*": () => result = firstNum * secondNum,
        "/": () => result = firstNum / secondNum,
        "%": () => result = firstNum % secondNum,
        "**": () => result = firstNum ** secondNum,
    }
    return obj[str]();
}
console.log(mathOperations(5, 6, '**'));