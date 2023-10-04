function touristShop(args) {
    let budget = Number(args[0]);
    let index = 1;
    let command = args[index];
    let counter = 0;
    let totalPrice = 0;
    while (command !== "Stop") {
        counter++;

        let name = command;
        index++;
        let priceOfProduct = Number(args[index]);
        if (counter % 3 === 0) {
            priceOfProduct *= 0.50;
        }
        totalPrice += priceOfProduct;
        if (totalPrice > budget) {
            console.log(`You don't have enough money!`);
            console.log(`You need ${(totalPrice - budget).toFixed(2)} leva!`);
            break;
        }
        index++;
        command = args[index];
    }
    if (command === "Stop") {
        console.log(`You bought ${counter} products for ${totalPrice.toFixed(2)} leva.`);
    }
}
touristShop(["54",
"Thermal underwear",
"24",
"Sunscreen",
"45"])

