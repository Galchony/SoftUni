function magicMatrices([firstArray, secondArray, thirdArray]) {
    let sumFirstArray = 0;
    let sumSecondArray = 0;
    let sumThirdArray = 0;
    let isTrue = false;
    let sumOfCol = 0;
    let newArr = [];
    for (let i = 0; i < firstArray.length; i++) {
        num = firstArray[i];
        sumFirstArray += num;
        secondNum = secondArray[i];
        sumSecondArray += secondNum;
        thirdNum = thirdArray[i];
        sumThirdArray += thirdNum;
        sumOfCol = num + secondNum + thirdNum;
        newArr.push(sumOfCol);
    }
    if (sumFirstArray === sumSecondArray && sumFirstArray === sumThirdArray) {
        isTrue = true;
    }
    else {
        isTrue = false;
    }
    for (let i = 0; i < newArr.length; i++) {
        num = newArr[i];
        if (isTrue === false) {
            break;
        }
        else {
            if (num !== sumFirstArray) {
                isTrue = false;
                break;
            }
        }
    }
    if (isTrue) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);