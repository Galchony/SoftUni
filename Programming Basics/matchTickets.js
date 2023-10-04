function matchTickets(args) {
    let budget = Number(args[0]);
    let category = (args[1]);
    let numberOfPeople = parseInt(args[2]);
    let transport = 0;
    let priceOfTicket = 0;

    if (numberOfPeople >= 1 & numberOfPeople <= 4) {
        transport += budget * 0.75;
    }
    else if (numberOfPeople >= 5 & numberOfPeople <= 9) {
        transport += budget * 0.6;
    }
    else if (numberOfPeople >= 10 & numberOfPeople <= 24) {
        transport += budget * 0.5;
    }
    else if (numberOfPeople >= 25 & numberOfPeople <= 49) {
        transport += budget * 0.4;
    }
    else if (numberOfPeople >= 50) {
        transport += budget * 0.25;
    }

    if (category === "Normal") {
        priceOfTicket += 249.99;
    }
    else if (category === "VIP") {
        priceOfTicket += 499.99;
    }

    if ((budget - transport) >= (numberOfPeople * priceOfTicket)) {
        console.log(`Yes! You have ${((budget - transport) - (numberOfPeople * priceOfTicket)).toFixed(2)} leva left.`);
    }
    else {
        console.log(`Not enough money! You need ${((numberOfPeople * priceOfTicket) - (budget - transport)).toFixed(2)} leva.`);
    }
}
matchTickets(["30000", "VIP", "49"]);