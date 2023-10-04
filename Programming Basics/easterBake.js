function easterBake(args) {
    let countOfEasteBread = Number(args[0]);
    let totalQuantityOfSugar = 0;
    let totalquantityOfFlour = 0;
    let maxQuantityOfFlour = Number.NEGATIVE_INFINITY;
    let maxQuantityOfSugar= Number.NEGATIVE_INFINITY;
    for (let index = 1; index <= 2 * countOfEasteBread; index++) {
        let quantityOfSugar = Number(args[index]);
        let quantityOfFlour = Number(args[++index]);
        totalQuantityOfSugar += quantityOfSugar;
        totalquantityOfFlour += quantityOfFlour;
        if (maxQuantityOfFlour<quantityOfFlour) {
            maxQuantityOfFlour = quantityOfFlour;
        }
        if (maxQuantityOfSugar<quantityOfSugar) {
            maxQuantityOfSugar = quantityOfSugar;
        }
    }
    console.log(`Sugar: ${Math.ceil(totalQuantityOfSugar/950)}`);
    console.log(`Flour: ${Math.ceil(totalquantityOfFlour/750)}`);
    console.log(`Max used flour is ${maxQuantityOfFlour} grams, max used sugar is ${maxQuantityOfSugar} grams.`);
}
easterBake(["3",
    "400",
    "350",
    "250",
    "300",
    "450",
    "380"])
