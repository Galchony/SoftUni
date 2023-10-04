function oddEvenSum(args) {
    let n = parseInt(args[0]);
    let num = 0;
    let sumEven = 0;
    let sumOdd = 0;
for (let row =1; row<=n; row++) {
    num = parseInt(args[row]);
    if (row%2===0) {
        sumEven +=num;
    }
    else {
        sumOdd +=num; 
    }
}
if (sumEven == sumOdd){
    console.log(`Yes`);
    console.log(`Sum = ${sumEven}`);
}
else{
    console.log(`No`);
    console.log(`Diff = ${Math.abs(sumEven-sumOdd)}`);
}
}
oddEvenSum(["4","10","50","60","20",])