function fishingBoat(args) {
    let budget = Number(args[0]);
    let season = (args[1]);
    let countOfFishermen = Number(args[2]);

    let priceForBoat = 0;

    if (season === "Spring") {
        priceForBoat = 3000;
    }
    else if (season === "Summer" || season === "Autumn") {
        priceForBoat = 4200;
    }
    else if (season === "Winter") {
        priceForBoat = 2600;
    }
    if (countOfFishermen <= 6) {
        priceForBoat *= 0.9;
    }
    else if (countOfFishermen <= 11) {
        priceForBoat *= 0.85;
    }
    else if (countOfFishermen > 12) {
        priceForBoat *= 0.75;
    }
    if (countOfFishermen % 2 === 0 && season !== "Autumn") {
        priceForBoat *=0.95;
    }
    if (budget>=priceForBoat) {
        console.log(`Yes! You have ${(budget-priceForBoat).toFixed(2)} leva left.`);
    }
    else {
        console.log(`Not enough money! You need ${(priceForBoat-budget).toFixed(2)} leva.`);
    }
}
fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600","Autumn","6"]);
fishingBoat(["2000","Winter","13"]);


