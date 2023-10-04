function monye(args) {
    let countOfBitcoin = Number(args[0]);
    let countOfchineseMonye = Number(args[1]);
    let commission = Number(args[2]);
    let result = (countOfBitcoin * 1168 + countOfchineseMonye * 0.15 * 1.76) / 1.95;
    let totalResult = (result - result*(commission/100));

    console.log(totalResult.toFixed(2));
}
monye(['7', '50200.12', '3']);
