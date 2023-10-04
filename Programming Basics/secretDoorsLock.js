function secretDoorsLock(args) {
    let finalNum1 = Number(args[0]);
    let finalNum2 = Number(args[1]);
    let finalNum3 = Number(args[2]);
    let result = "";
    for (let num1 = 1; num1 <= finalNum1; num1++) {
        if (num1 % 2 === 0) {
            for (let num2 = 2; num2 <= Math.min(finalNum2, 7); num2++) {
                if (num2 !== 4 && num2 !== 6) {
                    for (let num3 = 1; num3 <= finalNum3; num3++) {
                        if (num3 % 2 === 0) {
                            result = `${num1} ${num2} ${num3}`;
                            console.log(result);
                        }
                    }
                }
            }
        }
    }
}
secretDoorsLock(["8", "2", "8"])