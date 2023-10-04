function halfSumElement(args) {
    let n = parseInt(args[0]);
    let num = 0;
    let maxNum = Number.NEGATIVE_INFINITY;
    let sumNum = 0;
    for (let row = 1; row <= n; row++) {
        num = parseInt(args[row]);
        if (num > maxNum) {
            maxNum = num;
        }
        sumNum += num;
    }
    sumNum -= maxNum;
    if (maxNum == sumNum) {
        console.log(`Yes`);
        console.log(`Sum = ${maxNum}`);
    }
    else {
        console.log(`No`);
        console.log(`Diff = ${(Math.abs(maxNum-sumNum))}`);
    }
}
halfSumElement(["3", "1", "1", "10"]);
halfSumElement(["4", "6", "1", "2", "3"]);