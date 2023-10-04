function worldSnookerChampionship(args) {
    let stageOfChampionship = args[0];
    let typeOfTicket = args[1];
    let countOfTickets = Number(args[2]);
    let photoWant = args[3];
    let price = 0;
    let isValid = true;
    switch (stageOfChampionship) {
        case "Quarter final":
            if (typeOfTicket === "Standard") {
                price = 55.50;
            }
            else if (typeOfTicket === "Premium") {
                price = 105.20;
            }
            else if (typeOfTicket === "VIP") {
                price = 118.90;
            }
            break;
        case "Semi final":
            if (typeOfTicket === "Standard") {
                price = 75.88;
            }
            else if (typeOfTicket === "Premium") {
                price = 125.22;
            }
            else if (typeOfTicket === "VIP") {
                price = 300.40;
            }
            break;
        case "Final":
            if (typeOfTicket === "Standard") {
                price = 110.10;
            }
            else if (typeOfTicket === "Premium") {
                price = 160.66;
            }
            else if (typeOfTicket === "VIP") {
                price = 400;
            }
            break;
    }
    let totalPrice = countOfTickets * price;
    if (photoWant === "Y" && totalPrice <= 4000) {
       isValid = false;
    }
    if (totalPrice > 4000) {
        totalPrice *= 0.75;
    }
    else if (totalPrice > 2500) {
        totalPrice *= 0.90;
    }
    if (isValid === false) {
        totalPrice += (40*countOfTickets);
    }
    console.log(totalPrice.toFixed(2));
}
worldSnookerChampionship(["Semi final",
"VIP",
"9",
"Y"])

