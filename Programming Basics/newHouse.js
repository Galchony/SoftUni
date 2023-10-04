function newHouse(args) {
    let typeOfFlowers = args[0];
    let countOfFlowers = Number(args[1]);
    let budget = Number(args[2]);

    let priceOfFlowers = 0;


    if (typeOfFlowers === "Roses") {
        priceOfFlowers = 5;
        if (countOfFlowers > 80) {
            priceOfFlowers *= 0.9;
        }
    }
    if (typeOfFlowers === "Dahlias") {
        priceOfFlowers = 3.80;
        if (countOfFlowers > 90) {
            priceOfFlowers *= 0.85;
        }
    }
    if (typeOfFlowers === "Tulips") {
        priceOfFlowers = 2.80;
        if (countOfFlowers > 80) {
            priceOfFlowers *= 0.85;
        }
    }
    if (typeOfFlowers === "Narcissus") {
        priceOfFlowers = 3;
        if (countOfFlowers < 120) {
            priceOfFlowers *= 1.15;
        }
    }
    if (typeOfFlowers === "Gladiolus") {
        priceOfFlowers = 2.50;;
        if (countOfFlowers < 80) {
            priceOfFlowers *= 1.20;
        }
    }
    if (budget >= priceOfFlowers * countOfFlowers) {
        console.log(`Hey, you have a great garden with ${countOfFlowers} ${typeOfFlowers} and ${(budget - priceOfFlowers * countOfFlowers).toFixed(2)} leva left.`);
    }
    else {
        console.log(`Not enough money, you need ${(priceOfFlowers * countOfFlowers - budget).toFixed(2)} leva more.`);
    }
}
newHouse(["Roses", "55", "250"]);
newHouse(["Narcissus","119","360"]);
newHouse(["Tulips","88","260"]);


