function club(args) {
    let dreamIncome = Number(args[0]);
    let nameOfCocktail = "";
    let countOfCocktails = 0;
    let priceOfCocktail = 0;
    let realIncome = 0;
    for (let row = 1; row < Number.POSITIVE_INFINITY; row += 2) {
        nameOfCocktail = args[row];
        countOfCocktails = Number(args[row + 1]);
        if (nameOfCocktail === "Party!") {
            console.log(`We need ${(dreamIncome - realIncome).toFixed(2)} leva more.`);
            break;
        }
        else if (dreamIncome <= realIncome) {
            console.log(`Target acquired.`);
            break;
        }
        else {
            priceOfCocktail = (nameOfCocktail).length;
            if ((priceOfCocktail * countOfCocktails) % 2 === 1) {
                priceOfCocktail *= 0.75;
            }
            realIncome += priceOfCocktail * countOfCocktails;
        }
    }
    console.log(`Club income - ${(realIncome).toFixed(2)} leva.`);
}
//club(["500", "Bellini", "6", "Bamboo", "7", "Party!"]);
club(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);