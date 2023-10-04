function movieDestination(args) {
    let budget = Number(args[0]);
    let destination = args[1];
    let season = args[2];
    let days = Number(args[3]);
    let priceForDay = 0;
    if (destination === "Dubai") {
        switch (season) {
            case "Winter":
                priceForDay = 45000;
                break;
            case "Summer":
                priceForDay = 40000;
                break;
        }
        priceForDay*= 0.70;
    }
    else if (destination === "Sofia") {
        switch (season) {
            case "Winter":
                priceForDay = 17000;
                break;
            case "Summer":
                priceForDay = 12500;
                break;
        }
        priceForDay*= 1.25;
    }
    else if (destination === "London") {
        switch (season) {
            case "Winter":
                priceForDay = 24000;
                break;
            case "Summer":
                priceForDay = 20250;
                break;
        }
    }
    if (budget>=days*priceForDay) {
        console.log(`The budget for the movie is enough! We have ${(budget-days*priceForDay).toFixed(2)} leva left!`);
    }
    else {
        console.log(`The director needs ${(days*priceForDay-budget).toFixed(2)} leva more!`);
    }
}
movieDestination(["200000",
"London",
"Summer",
"7"])


