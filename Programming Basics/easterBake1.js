function easterBake(input) {
 
    let bakesCount = Number(input[0]);
 
    let sugarNeededTotal = 0;
    let flourNeededTotal = 0;
 
    let maxSugar = Number.MIN_SAFE_INTEGER;
    let maxFlour = Number.MIN_SAFE_INTEGER;
 
    for (let index = 1; index < input.length; index += 2) {
        let currentSugar = Number(input[index]);
        let currentFlour = Number(input[index + 1]);
 
        sugarNeededTotal += currentSugar;
        flourNeededTotal += currentFlour;
 
        if (currentSugar > maxSugar) {
            maxSugar = currentSugar;
        }
 
        if (currentFlour > maxFlour) {
            maxFlour = currentFlour;
        }
    }
 
    let sugarPacksNeeded = sugarNeededTotal / 950;
    let flourPacksNeeded = flourNeededTotal / 750;
 
    console.log(`Sugar: ${Math.ceil(sugarPacksNeeded)}`);
    console.log(`Flour: ${Math.ceil(flourPacksNeeded)}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);
}
easterBake(["3",
"400",
"350",
"250",
"300",
"450",
"380"])

