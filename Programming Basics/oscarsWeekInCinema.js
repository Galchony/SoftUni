function oscarsWeekInCinema(args) {
    let nameOfMovie = args[0];
    let typeOfHall = args[1];
    let countOfTickets = Number(args[2]);
    let priceOfTicket = 0;

    if (nameOfMovie === "A Star Is Born") {
        if (typeOfHall === "normal") {
            priceOfTicket = 7.50;
        }
        else if (typeOfHall === "luxury") {
            priceOfTicket = 10.50;
        }
        else if (typeOfHall === "ultra luxury") {
            priceOfTicket = 13.50;
        }
    }
    else if (nameOfMovie === "Bohemian Rhapsody") {
        if (typeOfHall === "normal") {
            priceOfTicket = 7.35;
        }
        else if (typeOfHall === "luxury") {
            priceOfTicket = 9.45;
        }
        else if (typeOfHall === "ultra luxury") {
            priceOfTicket = 12.75;
        }
    }
    else if (nameOfMovie === "Green Book") {
        if (typeOfHall === "normal") {
            priceOfTicket = 8.15;
        }
        else if (typeOfHall === "luxury") {
            priceOfTicket = 10.25;
        }
        else if (typeOfHall === "ultra luxury") {
            priceOfTicket = 13.25;
        }
    }
    else if (nameOfMovie === "The Favourite") {
        if (typeOfHall === "normal") {
            priceOfTicket = 8.75;
        }
        else if (typeOfHall === "luxury") {
            priceOfTicket = 11.55;
        }
        else if (typeOfHall === "ultra luxury") {
            priceOfTicket = 13.95;
        }
    }
    console.log(`${nameOfMovie} -> ${(priceOfTicket*countOfTickets).toFixed(2)} lv.`);
}
oscarsWeekInCinema(["A Star Is Born",
    "luxury",
    "42"])
oscarsWeekInCinema(["Green Book",
"normal",
"63"])
