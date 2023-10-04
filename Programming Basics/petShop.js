function petShop(args) {
    let countFoodForDogs = Number(args[0]);
    let countFoodForCats = Number(args[1]);
    let priceOfFoodForDogs = 2.50;
    let priceOfFoodForCats = 4;
    let sum = (countFoodForCats * priceOfFoodForCats + countFoodForDogs * priceOfFoodForDogs);
    console.log(`${sum} lv.`);
}
petShop(["13", "9"]);