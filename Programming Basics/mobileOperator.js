function mobileOperator(args) {
    let termOfContract = args[0];
    let typeOfContract = args[1];
    let bonusNet = args[2];
    let countOfMonths = Number(args[3]);
    let totalPriceForMonth = 0;

    if (termOfContract === "one") {
        switch (typeOfContract) {
            case "Small": totalPriceForMonth = 9.98; break;
            case "Middle": totalPriceForMonth = 18.99; break;
            case "Large": totalPriceForMonth = 25.98; break;
            case "ExtraLarge": totalPriceForMonth = 35.99; break;
        }
    }
    else if (termOfContract === "two") {
        switch (typeOfContract) {
            case "Small": totalPriceForMonth = 8.58; break;
            case "Middle": totalPriceForMonth = 17.09; break;
            case "Large": totalPriceForMonth = 23.59; break;
            case "ExtraLarge": totalPriceForMonth = 31.79; break;
        }

    }
    if (bonusNet === "yes") {
        if (totalPriceForMonth <= 10) {
            totalPriceForMonth += 5.50;
        }
        else if (totalPriceForMonth <= 30) {
            totalPriceForMonth += 4.35;
        }
        else if (totalPriceForMonth > 30) {
            totalPriceForMonth += 3.85;
        }
    }
    if (termOfContract === "two") {
        totalPriceForMonth *= 0.9625
    }
    console.log(`${(totalPriceForMonth * countOfMonths).toFixed(2)} lv.`);
}
mobileOperator(["two",
    "Small",
    "yes",
    "20"])

