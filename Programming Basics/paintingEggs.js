function paintingEggs(args) {
    let sizeOfEggs = args[0];
    let colorOfEggs = args[1];
    let batch = Number(args[2]);
    let priceOfEgg = 0;
    switch (sizeOfEggs) {
        case "Large":
            if (colorOfEggs === "Red") {
                priceOfEgg = 16;
            }
            else if (colorOfEggs === "Green") {
                priceOfEgg = 12;
            }
            else if (colorOfEggs === "Yellow") {
                priceOfEgg = 9;
            }
            break;
        case "Medium":
            if (colorOfEggs === "Red") {
                priceOfEgg = 13;
            }
            else if (colorOfEggs === "Green") {
                priceOfEgg = 9;
            }
            else if (colorOfEggs === "Yellow") {
                priceOfEgg = 7;
            }
            break;
        case "Small":
            if (colorOfEggs === "Red") {
                priceOfEgg = 9;
            }
            else if (colorOfEggs === "Green") {
                priceOfEgg = 8;
            }
            else if (colorOfEggs === "Yellow") {
                priceOfEgg = 5;
            }
            break;
    }
    let totalPrice = priceOfEgg*batch*0.65;
    console.log(`${(totalPrice).toFixed(2)} leva.`);
}
paintingEggs(["Large",
"Red",
"7"])
