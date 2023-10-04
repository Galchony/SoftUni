function equalPairs(args) {
    let n = parseInt(args[0]);
    let num1 = 0;
    let num2 = 0;
    let sumNum = 0;
    let sumNum2 = 0;
    let diffSum = Number.NEGATIVE_INFINITY;
    let maxDiff = Number.NEGATIVE_INFINITY;
    for (let row = 1; row <= 2 * n; row += 2) {
        num1 = parseInt(args[row]);
        num2 = parseInt(args[row + 1]);
        if (row == 1) {
            sumNum = num1 + num2;
        }
        sumNum2 = num1 + num2;
        if (sumNum !== sumNum2) {
            if ((diffSum !==Number.NEGATIVE_INFINITY) && (diffSum - sumNum2) > maxDiff) {
                maxDiff = Math.abs(diffSum - sumNum2);
            }
            diffSum = sumNum2;
            if ((diffSum - sumNum) > maxDiff) {
                maxDiff = Math.abs(diffSum - sumNum);
            }
        }
    }
    if (diffSum === Number.NEGATIVE_INFINITY) {
        console.log(`Yes, value =${sumNum}`);
    }
    else {
        console.log(`No, maxdiff=${maxDiff}`);
    }
}
// equalPairs(["3", "1", "2", "0", "3", "4", "-1"]);
// equalPairs(["1", "5", "5"]);
// equalPairs(["2", "1", "2", "2", "2"]);
//equalPairs(["4", "1", "1", "3", "1", "2", "2", "0", "0"]);
equalPairs(["2", "-1", "2", "0", "-1"]);