function bitcoin(array) {
    let minedGold = 0;
    let sumOfMinedGold = 0;
    let bitcoinPrice = 11949.16;
    let allMoneyIHave = 0;
    let day = 0;;
    let countOfBitcoins = 0;
    let counter = 0;
    for (let index = 1; index <= array.length; index++) {
        minedGold = array[index - 1];
        if (index % 3 == 0) {
            minedGold *= 0.70;
        }
        allMoneyIHave += minedGold * 67.51;
        while (allMoneyIHave >= bitcoinPrice) {
            countOfBitcoins++;
            allMoneyIHave = allMoneyIHave - bitcoinPrice;
            counter++;
            if (counter == 1) {
                day = index;
            }
        }
    }

    console.log(`Bought bitcoins: ${countOfBitcoins}`);
    if (counter >0) {
        console.log(`Day of the first purchased bitcoin: ${day}`);
    }
    console.log(`Left money: ${allMoneyIHave.toFixed(2)} lv.`);
}
//bitcoin([100, 200, 300]);
//bitcoin([50, 100]);
bitcoin([3124.15, 504.212, 2511.124]);

