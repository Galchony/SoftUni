function leftAndRightSum(args) {
    let n = parseInt(args[0]);
    let sum1 = 0;
    let sum2 = 0;
    for (let row = 1; row <= 2 * n; row++) {
        num = parseInt(args[row]);
        if (row <= n) {
            sum1 += num;
        }
        else {
            sum2 += num;
        }
    }
    if (sum1 == sum2){
        console.log(`Yes, sum = ${sum1}`);
    }
    else {
        console.log((`No, diff = ${Math.abs(sum1-sum2)}`));
    }
}
leftAndRightSum(["2", "10", "90", "60", "40"]);
leftAndRightSum(["2", "9", "90", "50", "50"]);