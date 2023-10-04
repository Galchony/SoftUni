function easterLunch(args) {
    let countOfEasteBread = Number(args[0]);
    let countOfEggs = Number(args[1]);
    let cookiesInKg = Number(args[2]);
    let priceOfEasteBread = 3.20;
    let priceOfEggs = 4.35;
    let priceOfcookiesInKg = 5.40;
    let paintForEggs = 0.15*12;
    let result = countOfEasteBread * priceOfEasteBread + countOfEggs * priceOfEggs + countOfEggs * paintForEggs + cookiesInKg * priceOfcookiesInKg;
    console.log(result.toFixed(2));

}
easterLunch(["3",
    "2",
    "3"])
