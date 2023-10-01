function sortNumbers(firstNum, secondNum, thirdNum) {
    // let smallestNum = Number.POSITIVE_INFINITY;
    // let middNum;
    // let bigestNum = Number.NEGATIVE_INFINITY;
    // if (firstNum < smallestNum) {
    //     smallestNum = firstNum;
    // }
    // if (secondNum < smallestNum) {
    //     smallestNum = secondNum;
    // }
    // if (thirdNum < smallestNum) {
    //     smallestNum = thirdNum;
    // }

    // if (firstNum > bigestNum) {
    //     bigestNum = firstNum;
    // }
    // if (secondNum > bigestNum) {
    //     bigestNum = secondNum;
    // }
    // if (thirdNum > bigestNum) {
    //     bigestNum = thirdNum;
    // }

    // if (firstNum != smallestNum && firstNum != bigestNum) {
    //     middNum = firstNum;
    // } else if (secondNum != smallestNum && secondNum != bigestNum) {
    //     middNum = secondNum;
    // }
    // else {
    //     middNum = thirdNum;
    // }
    // console.log(bigestNum);
    // console.log(middNum);
    // console.log(smallestNum);


    let middNum;
    console.log(Math.max(firstNum, secondNum, thirdNum));
    if (firstNum != Math.max(firstNum, secondNum, thirdNum)
        && firstNum != Math.min(firstNum, secondNum, thirdNum)) {
        middNum = firstNum;
    } else if (secondNum != Math.max(firstNum, secondNum, thirdNum)
        && secondNum != Math.min(firstNum, secondNum, thirdNum)) {
        middNum = secondNum;
    }
    else {
        middNum = thirdNum;
    }
    console.log(middNum);
    console.log(Math.min(firstNum, secondNum, thirdNum));
}
sortNumbers(100, 1, 3);
