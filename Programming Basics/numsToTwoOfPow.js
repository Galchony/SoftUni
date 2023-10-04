function numsToTwoOfPow(args) {
    let n = Number(args[0]);
    let num = 1;
    for (let row = 0; row <= n; row++) {
        console.log(num);
        num *= 2;
    }
}
numsToTwoOfPow(["10"]);