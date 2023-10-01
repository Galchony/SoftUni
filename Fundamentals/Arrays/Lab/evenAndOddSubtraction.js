function evenAndOddSubtraction(params) {
    let num = 0;
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < params.length; i++) {
        num = Number(params[i]);
        if (num % 2 == 1) {
            oddSum += num;
        }
        else if (num % 2 == 0) {
            evenSum += num;
        }
    }
    let result = evenSum - oddSum;
    console.log(result);
}
evenAndOddSubtraction([1,2,3,4,5,6,7,8,9]);
// evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
// evenAndOddSubtraction([2, 4, 6, 8, 10]);