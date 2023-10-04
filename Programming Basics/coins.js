function coins(args) {
    let instead = Number(args[0]);
    let coin = Math.trunc(instead * 100);
    let sum = 0;
    let countOfCoin = 0;
    while (coin !== 0) {
        if (coin >= 200) {
            sum = 200;
            countOfCoin++;
            coin -= sum;
        }
        else if (coin >= 100) {
            sum = 100;
            countOfCoin++;
            coin -= sum;
        }
        else if (coin >= 50) {
            sum = 50;
            countOfCoin++;
            coin -= sum;
        }
        else if (coin >= 20) {
            sum = 20;
            countOfCoin++;
            coin -= sum;
        }
        else if (coin >= 10) {
            sum = 10;
            countOfCoin++;
            coin -= sum;
        }
        else if (coin >= 5) {
            sum = 5;
            countOfCoin++;
            coin -= sum;
        }
        else if (coin >= 2) {
            sum = 2;
            countOfCoin++;
            coin -= sum;
        }
        else if (coin >= 1) {
            sum = 1;
            countOfCoin++;
            coin -= sum;
        }
    }
    console.log(countOfCoin);
}
coins(["0.56"]);