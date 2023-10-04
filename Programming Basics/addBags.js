function addBags(args) {
    let priceOfBaggageOverTwentyKg = Number(args[0]);
    let weightOfBaggageInKg = Number(args[1]);
    let countOfDays = Number(args[2]);
    let countOfBaggages = Number(args[3]);
    let price = 0;
   
    if (weightOfBaggageInKg < 10) {
        price = priceOfBaggageOverTwentyKg * 0.20;
    }
    else if (weightOfBaggageInKg <= 20) {
        price = priceOfBaggageOverTwentyKg * 0.50;
    }
    else if (weightOfBaggageInKg > 20) {
        price = priceOfBaggageOverTwentyKg;
    }
    if (countOfDays > 30) {
        price *= 1.10;
    }
    else if (countOfDays >= 7) {
        price *= 1.15;
    }
    else if (countOfDays < 7) {
        price *= 1.40;
    }
    let totalPrice = price*countOfBaggages
    console.log(`The total price of bags is: ${(totalPrice).toFixed(2)} lv.`);
}
addBags(["30",
"18",
"15",
"2"])


