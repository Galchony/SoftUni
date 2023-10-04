function filmPremiere(args) {
    let nameOfMovie = args[0];
    let packet = args[1];
    let countOfTickets = Number(args[2]);
    let priceOfTicket = 0;
    if (nameOfMovie === "John Wick") {
        switch (packet) {
            case "Drink":
                priceOfTicket = 12;
                break;
            case "Popcorn":
                priceOfTicket = 15;
                break;
            case "Menu":
                priceOfTicket = 19;
                break;
        }
    }
    else if (nameOfMovie === "Star Wars") {
        switch (packet) {
            case "Drink":
                priceOfTicket = 18;
                break;
            case "Popcorn":
                priceOfTicket = 25;
                break;
            case "Menu":
                priceOfTicket = 30;
                break;

        }
        if (countOfTickets>=4) {
            priceOfTicket *= 0.70;
        }
    }
    else if (nameOfMovie === "Jumanji") {
        switch (packet) {
            case "Drink":
                priceOfTicket = 9;
                break;
            case "Popcorn":
                priceOfTicket = 11;
                break;
            case "Menu":
                priceOfTicket = 14;
                break;

        }
        if (countOfTickets === 2) {
            priceOfTicket*=0.85;
        }
    }
   
    console.log(`Your bill is ${(priceOfTicket*countOfTickets).toFixed(2)} leva.`);
}
filmPremiere(["Star Wars",
"Popcorn",
"4"])

