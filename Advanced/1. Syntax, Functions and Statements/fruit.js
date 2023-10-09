function fruit(friutName, weightInGrams, pricePerKg) {
    let weightInKg = weightInGrams / 1000;
    let costs = pricePerKg * weightInKg;
    console.log(`I need $${costs.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${friutName}.`);
}
fruit('orange', 2500, 1.80);