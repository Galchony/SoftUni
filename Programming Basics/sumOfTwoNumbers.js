function sumOfTwoNumbers(args) {
    let startNum = Number(args[0]);
    let finalNum = Number(args[1]);
    let magicNum = Number(args[2]);
    let row = 0;
    let isValid = true;
    let num2 =0;
    for (let x = startNum; x <= finalNum; x++) {
        for (let y = startNum; y <= finalNum; y++) {
            num2 = y;
            isValid = true;
            row++;
            if (x + num2 === magicNum) {
                console.log(`Combination N:${row} (${x} + ${num2} = ${magicNum})`);
                isValid = true;
                break;
            }
            else {
                isValid = false;
            }
        }
        if (x + num2 === magicNum) {
            break;
        }
    }
    if (isValid === false) {
        console.log(`${row} combinations - neither equals ${magicNum}`);
    }
}
sumOfTwoNumbers(["88", "888", "2000"]);