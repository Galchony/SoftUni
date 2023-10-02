function carWash(array) {
    let cleanValue = 0;
    for (const command of array) {
        if (command === "soap") {
            cleanValue += 10;
        } else if (command === "water") {
            cleanValue = increaseValue(cleanValue,20);
        } else if (command === "vacuum cleaner") {
            cleanValue =  increaseValue(cleanValue,25);
        } else if (command === "mud") {
            cleanValue *= 0.90;
        }
    }
    console.log(`The car is ${cleanValue.toFixed(2)}% clean.`);

    function increaseValue(value,percent) {
        let result = value + percent/100*value;
        return result;
    }

}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);