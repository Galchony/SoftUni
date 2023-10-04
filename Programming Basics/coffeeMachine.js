function coffeeMachine(args) {
    let typeOfDrinks = args[0];
    let sugar = args[1];
    let countOfDrinks = Number(args[2]);

    let priceOfDrink = 0;

    if (typeOfDrinks === "Espresso") {
        switch (sugar) {
            case "Without":
                priceOfDrink = 0.90;
                break;
            case "Normal":
                priceOfDrink = 1;
                break;
            case "Extra":
                priceOfDrink = 1.20;
                break;
        }
    }
    else if (typeOfDrinks === "Cappuccino") {
        switch (sugar) {
            case "Without":
                priceOfDrink = 1;
                break;
            case "Normal":
                priceOfDrink = 1.20;
                break;
            case "Extra":
                priceOfDrink = 1.60;
                break;
        }
    }
    else if (typeOfDrinks === "Tea") {
        switch (sugar) {
            case "Without":
                priceOfDrink = 0.50;
                break;
            case "Normal":
                priceOfDrink = 0.60;
                break;
            case "Extra":
                priceOfDrink = 0.70;
                break;
        }
    }
    if (sugar === "Without") {
        priceOfDrink *= 0.65;
    }
    if (typeOfDrinks === "Espresso" && countOfDrinks >= 5) {
        priceOfDrink *= 0.75;
    }
    let totalPrice = priceOfDrink * countOfDrinks;

    if (totalPrice > 15) {
        totalPrice *= 0.80;
    }
    console.log(`You bought ${countOfDrinks} cups of ${typeOfDrinks} for ${totalPrice.toFixed(2)} lv.`);
}
coffeeMachine(["Espresso", "Without", 10]);
coffeeMachine(["Cappuccino", "Normal", 13]);
coffeeMachine(["Tea", "Extra", 3])