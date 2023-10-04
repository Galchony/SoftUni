function sumOfTwoNumbers1(args) {
    let startNum = Number(args[0]);
    let finalNum = Number(args[1]);
    let magicNum = Number(args[2]);
    let counter = 0;
    let isValid = true;
    for (let x = startNum; x <= finalNum; x++) {
        for (let y = startNum; y <= finalNum; y++) {
            counter++;
            if (x + y === magicNum) {
                console.log(`Combination N:${counter} (${x} + ${y} = ${magicNum})`);
                isValid = false;
                break;
            }
        }
        if (isValid === false) {
            break;
            
        }
    }
    if (isValid === true) {
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }
}
sumOfTwoNumbers1(["88", 
"888", 
"2000"])


