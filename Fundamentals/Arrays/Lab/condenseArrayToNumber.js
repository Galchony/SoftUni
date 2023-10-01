function condenseArrayToNumber(params) {
    let firstNumber = 0;
    let secondNumber = 0;
    let sum = 0;
    let paramsNew = params;
    for (let i = 0; i <= params.length - 2; i++) {
        let arr = [];
        for (let j = 0; j < paramsNew.length - 1; j++) {
            firstNumber = paramsNew[j];
            secondNumber = paramsNew[j + 1];
            sum = firstNumber + secondNumber;
            arr[j] = sum;
        }
        paramsNew = arr;
    }
    if (params.length <= 1) {
        console.log(`${params[0]}`);
    }
    else {
        console.log(sum);
    }
}
//condenseArrayToNumber([2, 10, 3]);
//condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([0]);