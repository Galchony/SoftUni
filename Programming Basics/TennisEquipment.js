function tennisEquipment(args) {
    let priceOfRacket = Number(args[0]);
    let countOfRacket = Number(args[1]);
    let countOfSneakers = Number(args[2]);
    let priceOfSneakers = priceOfRacket / 6;
    let currentExpenses = priceOfRacket * countOfRacket + priceOfSneakers * countOfSneakers;
    let priceOfOthers = currentExpenses * 0.20;
    let totalExpenses = (currentExpenses+priceOfOthers);
    console.log(`Price to be paid by Djokovic ${Math.floor(totalExpenses/8)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(totalExpenses*7/8)}`);
}
tennisEquipment(["850",
    "4",
    "2"])