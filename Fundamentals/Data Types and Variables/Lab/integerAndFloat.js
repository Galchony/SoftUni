function integerAndFloat(firstNum, secondNum, thirdNum) {
    let sum = firstNum + secondNum + thirdNum;
    let type;
    Number.isInteger(sum) ? type = "Integer" : type = "Float";
    console.log(`${sum} - ${type}`);
}
integerAndFloat(9, 100, 1.1);