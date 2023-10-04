function series(args) {
    let budget = Number(args[0]);
    let countOfFilms = Number(args[1]);
    let name = "";
    let priceOfFilm = 0;
    let totalPrice = 0;
    for (let i = 2; i < 2 + countOfFilms * 2; i += 2) {
        name = args[i];
        priceOfFilm = Number(args[i + 1]);
        if (name === "Thrones") {
            priceOfFilm *= 0.50;
        }
        else if (name === "Lucifer") {
            priceOfFilm *= 0.60;
        }
        else if (name === "Protector") {
            priceOfFilm *= 0.70;
        }
        else if (name === "TotalDrama") {
            priceOfFilm *= 0.80;
        }
        else if (name === "Area") {
            priceOfFilm *= 0.90;
        }
        totalPrice +=priceOfFilm;
    }
    if (budget>=totalPrice) {
        console.log(`You bought all the series and left with ${(budget-totalPrice).toFixed(2)} lv.`);
    }
    else {
        console.log(`You need ${(totalPrice-budget).toFixed(2)} lv. more to buy the series!`);
    }
}
series(["25",
"6",
"Teen Wolf",
"8",
"Protector",
"5",
"TotalDrama",
"5",
"Area",
"4",
"Thrones",
"5",
"Lucifer",
"9"])
