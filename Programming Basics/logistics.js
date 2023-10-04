function logistics(args) {
    let countOfLoads = parseInt(args[0]);
    let priceForTon = 0
    let sumOfTonnage = 0;
    let sumOfPrices = 0;

    let loadsWhitVan = 0;
    let loadsWhitTruck = 0;
    let loadsWhitTrain = 0;

    for (let row = 1; row <= countOfLoads; row++) {
        let tonnageOfLoad = parseInt(args[row]);
        if (tonnageOfLoad <= 3) {
            priceForTon = 200;
            loadsWhitVan += tonnageOfLoad;
            finalPrice = tonnageOfLoad * priceForTon

        }
        else if (tonnageOfLoad > 11) {
            priceForTon = 120;
            loadsWhitTrain += tonnageOfLoad;
            finalPrice = tonnageOfLoad * priceForTon
        }
        else {
            priceForTon = 175;
            loadsWhitTruck += tonnageOfLoad;
            finalPrice = tonnageOfLoad * priceForTon
        }
        sumOfTonnage += tonnageOfLoad;
        sumOfPrices +=finalPrice;
    }
    console.log((sumOfPrices/sumOfTonnage).toFixed(2));
    console.log(`${(((loadsWhitVan / sumOfTonnage)*100).toFixed(2))}%`);
    console.log(`${(((loadsWhitTruck / sumOfTonnage)*100).toFixed(2))}%`);;
    console.log(`${(((loadsWhitTrain / sumOfTonnage)*100).toFixed(2))}%`);;


}
//logistics(["4","1","5","16","3",]);
logistics(["5","2","10","20","1","7"]);