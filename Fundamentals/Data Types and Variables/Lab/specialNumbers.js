function specialNumbers(number) {
    let numberToText = "";
    let sumOfDigits = 0;
    let result = "";
    for (let i = 1; i <= number; i++) {
        sumOfDigits = 0;
        numberToText = i.toString()
        for (const digit of numberToText) {
            sumOfDigits += Number(digit);
        }
        sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11 ? result = "True" : result = "False";
        console.log(`${i} -> ${result}`);
    }
}
//specialNumbers(15);
specialNumbers(20);