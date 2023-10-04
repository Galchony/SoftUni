function skiTrip(args) {
    let days = Number(args[0]);
    let typePremises = args[1];
    let rate = args[2];

    let priceForPremises = 0;
    let nights = days - 1;

    if (typePremises === "room for one person") {
        priceForPremises = 18;
    }
    else if (typePremises === "apartment") {
        priceForPremises = 25;
        if (nights < 10) {
            priceForPremises *= 0.70;
        }
        else if (nights <= 15) {
            priceForPremises *= 0.65;
        }
        else {
            priceForPremises *= 0.50;
        }
    }
    else if (typePremises === "president apartment") {
        priceForPremises = 35;
        if (nights < 10) {
            priceForPremises *= 0.90;
        }
        else if (nights <= 15) {
            priceForPremises *= 0.85;
        }
        else {
            priceForPremises *= 0.80;
        }
    }
    if (rate === "positive") {
        priceForPremises *= 1.25;
    }
    else {
        priceForPremises *= 0.90;
    }
    console.log((nights*priceForPremises).toFixed(2));
}
skiTrip(["14", "apartment", "positive"]);
skiTrip(["30",
"president apartment",
"negative"])

