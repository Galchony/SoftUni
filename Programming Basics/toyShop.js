function toyShop(args) {
    let priceOfVacation = Number(args[0]);
    let puzzles = parseInt(args[1]);
    let dolls = parseInt(args[2]);
    let bears = parseInt(args[3]);
    let minions = parseInt(args[4]);
    let truck = parseInt(args[5]);

    let puzzlesPrice = 2.6;
    let dollPrice = 3;
    let bearsPrice = 4.1;
    let minionsPrice = 8.2;
    let truckPrice = 2;

    let result = puzzles * puzzlesPrice + dolls * dollPrice + bears * bearsPrice + minions * minionsPrice + truck * truckPrice;
    if ((puzzles + dolls + bears + minions + truck) >= 50) {
        result= 0.75*result;
    }
    let finalSum = (result - result*0.1); 
    if (finalSum >= priceOfVacation) {
        console.log(`Yes! ${(finalSum-priceOfVacation).toFixed(2)} lv left.`);
    }
    else {
        console.log(`Not enough money! ${(priceOfVacation - finalSum).toFixed(2)} lv needed.`);
    }

}
toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);