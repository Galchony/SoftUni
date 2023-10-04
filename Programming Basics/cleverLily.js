function cleverLily(args) {
    let age = Number(args[0]);
    let priceOfWashMashine = Number(args[1]);
    let priceOFToy = Number(args[2]);
    let countOfToy = 0;
    let monye = 0;
    let allMonye = 0;
    let allSavedMonye = 0;
    for (let i = 1; i <= age; i++) {
        if (i % 2 === 1) {
            countOfToy += 1;
        }
        else {
            monye += 10;
            allMonye+=monye-1;
        }
        
    }
    allSavedMonye = allMonye +countOfToy*priceOFToy;
    if (allSavedMonye>=priceOfWashMashine) {
        console.log(`Yes! ${(allSavedMonye-priceOfWashMashine).toFixed(2)}`);
    }
    else {
        console.log(`No! ${(priceOfWashMashine-allSavedMonye).toFixed(2)}`);
    }
}
cleverLily(["10",
    "170.00",
    "6"])
