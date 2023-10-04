function safari(args) {
    let budget = Number(args[0]);
    let litersFuel = Number(args[1]);
    let day = args[2];
    let priceOfFuel = 2.10;
    let priceForGuide = 100;
    let neededMonye = litersFuel * priceOfFuel + priceForGuide;
    switch (day) {
        case "Saturday": neededMonye *= 0.90; break;
        case "Sunday": neededMonye *= 0.80; break;
    }

    if (budget >= neededMonye) {
        console.log(`Safari time! Money left: ${(budget - neededMonye).toFixed(2)} lv.`);
    }
    else {
        console.log(`Not enough money! Money needed: ${(neededMonye - budget).toFixed(2)} lv.`);
    }

}
safari(["120",
"30",
"Saturday"])

