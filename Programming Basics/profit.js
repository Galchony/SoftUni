function profit(args) {
    let countOfOneLevCoin = Number(args[0]);
    let countOfTwoLevCoin = Number(args[1]);
    let countOfFiveLevBankNote = Number(args[2]);
    let sum = Number(args[3]);
    let valueOfOneLevCoin = 1;
    let valueOfTwoLevCoin = 2;
    let valueOfFiveLevBankNote = 5;
    for (let x = 0; x <= countOfOneLevCoin; x++) {
        for (let y = 0; y <= countOfTwoLevCoin; y++) {
            for (let z = 0; z <= countOfFiveLevBankNote; z++) {
                if (x * valueOfOneLevCoin + y * valueOfTwoLevCoin + z * valueOfFiveLevBankNote === sum) {
                    console.log(`${x} * 1 lv. + ${y} * 2 lv. + ${z} * 5 lv. = ${sum} lv.`);
                }
            }

        }
    }
}
profit(["5", "3", "1", "7"])