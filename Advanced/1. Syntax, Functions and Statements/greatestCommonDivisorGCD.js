function greatestCommonDivisorGCD(firstNum, secondNum) {
    let smallestNum = Math.min(firstNum, secondNum);
    for (let i = smallestNum; i > 0; i--) {
        if (firstNum % i === 0 && secondNum % i === 0) {
            console.log(i);
            break;
        }
    }
}

greatestCommonDivisorGCD(2154, 458);