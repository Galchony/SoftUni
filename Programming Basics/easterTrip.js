function easterTrip(args) {
    let destination = args[0];
    let dates = args[1];
    let countOfNights = Number(args[2]);
    let priceForNight = 0;
    if (destination === "France") {
        if (dates === "21-23") {
            priceForNight = 30;
        }
        else if (dates === "24-27") {
            priceForNight = 35;
        }
        else if (dates === "28-31") {
            priceForNight = 40;
        }
    }
    else if (destination === "Italy") {
        if (dates === "21-23") {
            priceForNight = 28;
        }
        else if (dates === "24-27") {
            priceForNight = 32;
        }
        else if (dates === "28-31") {
            priceForNight = 39;
        }
    }
    else if (destination === "Germany") {
        if (dates === "21-23") {
            priceForNight = 32;
        }
        else if (dates === "24-27") {
            priceForNight = 37;
        }
        else if (dates === "28-31") {
            priceForNight = 43;
        }
    }
    let totalCosts = priceForNight * countOfNights;

    console.log(`Easter trip to ${destination} : ${(totalCosts).toFixed(2)} leva.`);
}
easterTrip(["France",
"28-31",
"8"])

