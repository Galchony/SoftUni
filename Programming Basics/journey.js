function journey(args) {
    let budget = Number(args[0]);
    let season = (args[1]);

    let destination = "";
    let type ="";
    let price = 0;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            price = budget * 0.30;
            type = "Camp"
        }
        else {
            price = budget * 0.70;
            type = "Hotel";
        }
    }
    else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            price = budget * 0.40;
            type = "Camp"
        }
        else {
            price = budget * 0.80;
            type = "Hotel";
        }
    }
    else if (budget > 1000) {
        destination = "Europe";
        price = budget * 0.90;
        type = "Hotel";
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${(price).toFixed(2)}`);
}
journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["1500", "summer"])
journey(["678.53", "winter"])