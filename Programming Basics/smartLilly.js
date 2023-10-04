function smartLilly(args) {
    let age = parseInt(args[0]);
    let priceOfWashingMachine = Number(args[1]);
    let priceOfToy = parseInt(args[2]);

    let countOfToy = 0;
    let savedMonye = 0;
    let allSavedMonye = 0;
    for (let toy = 1; toy <= age; toy += 2) {
        countOfToy += 1;
    }
    for (let monye = 2; monye <= age; monye += 2) {
        //savedMonye = 0;
        //for (let mon = monye; mon <= monye; mon += 2) {
            savedMonye += 10;
       // }
        allSavedMonye += savedMonye - 1;
    }
    let monyeFromToy = (countOfToy * priceOfToy);
    let result = monyeFromToy + allSavedMonye;
    if (result >= priceOfWashingMachine) {
        console.log(`Yes! ${(result - priceOfWashingMachine).toFixed(2)}`);
    }
    else {
        console.log(`No! ${(priceOfWashingMachine - result).toFixed(2)}`);
    }
    
}
smartLilly(["21", "1570.98", "3"]);