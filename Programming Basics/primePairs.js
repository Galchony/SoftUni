function primePairs(args) {
    let num1 = Number(args[0]);
    let num2 = Number(args[1]);
    let diffNum1 = Number(args[2]);
    let diffNum2 = Number(args[3]);
    let result = "";

    for (let i = num1; i <= num1 + diffNum1; i++) {
        for (let j = num2; j <= num2 + diffNum2; j++) {
            if ((i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0)&&(j % 2 !== 0 && j % 3 !== 0 && j % 5 !== 0 && j % 7 !== 0)) {
                result = `${i}${j}`;
                console.log(result);
            }
        }
    }
}
primePairs(["10", "30", "9", "6"]);