function biggestOfThreeNumbers(firstNum, secondNum, thirdNum) {
    let maxNum = firstNum;
    if (maxNum < secondNum) {
        maxNum = secondNum;
    }
    if (maxNum < thirdNum) {
        maxNum = thirdNum;
    }
    console.log(maxNum);
}
biggestOfThreeNumbers(2, 2, 2);
biggestOfThreeNumbers(43, 43.2, 43.1);