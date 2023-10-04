function oddOrEvenPosition(args) {
    let n = Number(args[0]);
    let num = 0;
    let sumEvenNum = 0;
    let sumOddNum = 0;
    let maxEvenNum = Number.NEGATIVE_INFINITY;
    let minEvenNum = Number.POSITIVE_INFINITY;
    let maxOddNum = Number.NEGATIVE_INFINITY;
    let minOddNum = Number.POSITIVE_INFINITY;
    for (let row = 1; row <= n; row++) {
        num = Number(args[row]);
        if (row % 2 == 0) {
            sumEvenNum += num;
            if (maxEvenNum < num) {
                maxEvenNum = num;
            }
            if (minEvenNum > num) {
                minEvenNum = num;
            }
        }
        else {
            sumOddNum += num;
            if (maxOddNum < num) {
                maxOddNum = num;
            }
            if (minOddNum > num) {
                minOddNum = num;
            }
        }
    }
    if (maxEvenNum === Number.NEGATIVE_INFINITY) {
        maxEvenNum = "No";
    }
    if (maxOddNum === Number.NEGATIVE_INFINITY) {
        maxOddNum = "No";
    }
    if (minEvenNum === Number.POSITIVE_INFINITY) {
        minEvenNum = "No";
    }
    if (minOddNum === Number.POSITIVE_INFINITY) {
        minOddNum = "No";
    }
    console.log(`OddSum=${sumOddNum},`);
    console.log(`OddMin=${minOddNum},`);
    console.log(`OddMax=${maxOddNum},`);
    console.log(`EvenSum=${sumEvenNum},`);
    console.log(`EvenMin=${minEvenNum},`);
    console.log(`EvenMax=${maxEvenNum}`);
}
oddOrEvenPosition(["2","1.5","-2.5"]);