function catDiet(args) {
    let percentOfFats = Number(args[0]);
    let percentOfProteins = Number(args[1]);
    let percentOfCarbohydrates = Number(args[2]);
    let totalCountCalories = Number(args[3]);
    let percentOfWater = Number(args[4]);
    let fatsInGrams = percentOfFats/100*totalCountCalories/9;
    let proteinsInGrams = percentOfProteins/100*totalCountCalories/4;
    let carbohydratesInGrams = percentOfCarbohydrates/100*totalCountCalories/4;
    let totalWeight = fatsInGrams+proteinsInGrams+carbohydratesInGrams;
    let caloriesOfOneGr = totalCountCalories/totalWeight;
    let result = caloriesOfOneGr*(1-percentOfWater/100);
    console.log(result.toFixed(4));

}
catDiet(["40",
"40",
"20",
"3000",
"40"])

