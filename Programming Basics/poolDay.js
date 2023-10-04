function poolDay(args) {
    let countOfPeople = parseInt(args[0]);
    let tax = Number(args[1]);
    let priceForlounger = Number(args[2]);
    let priceForUmbrella = Number(args[3]);

    let totalPrice = (countOfPeople * tax) + (Math.ceil(countOfPeople / 2) * priceForUmbrella) + (Math.ceil(countOfPeople * 0.75) * priceForlounger);

    console.log(`${(totalPrice).toFixed(2)} lv.`);
}
poolDay([21, 5.50, 4.40, 6.20]);