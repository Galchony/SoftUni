function luckyNumbers(args) {
    let n = Number(args[0]);
    let happyNums = "";
    for (let digit1 = 1; digit1 <= 9; digit1++) {
        for (let digit2 = 1; digit2 <= 9; digit2++) {
            for (let digit3 = 1; digit3 <= 9; digit3++) {
                for (let digit4 = 1; digit4 <= 9; digit4++) {
                    if ((digit1 + digit2 === digit3 + digit4) && (n % (digit1 + digit2) === 0)) {
                        happyNums += `${digit1}${digit2}${digit3}${digit4} `
                    }
                }
            }
        }
    }
    console.log(happyNums);
}
luckyNumbers(["7"]);