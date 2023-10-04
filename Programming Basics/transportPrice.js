function transportPrice(args) {
    let n = Number(args[0]);
    let time = args[1];

    let taxiPrice = 0.7;
    let autobusPrice = 0;
    let trainPrice = 0;
    if (time === "day" & n < 20) {
        taxiPrice += (n * 0.79);
        console.log(taxiPrice);
    }
    else if (time === "night" & n < 20) {
        taxiPrice += (n * 0.90);
        console.log(taxiPrice);
    }
    if (n >= 20 & n < 100) {
        autobusPrice += (n * 0.09);
        console.log(autobusPrice);
    }
    if (n >= 100) {
        trainPrice += (n * 0.06);
        console.log(trainPrice.toFixed(2));
    }
    //(Math.min(taxiPrice, autobusPrice, trainPrice));
}
transportPrice(["180", "night"])