function hotelRoom1(args) {
    let season = args[0];
    let nights = Number(args[1]);

    let priceForStudio = 0;
    let priceForApartment = 0;
    if (season === "May" || season === "October") {
        priceForStudio = 50;
        priceForApartment = 65;
        if (nights > 7 && nights <= 14) {
            priceForStudio *= 0.95;
        }
        else if (nights > 14) {
            priceForStudio *= 0.70;
            priceForApartment *= 0.90;
        }
    }
    else if (season === "June" || season === "September") {
        priceForStudio = 75.20;
        priceForApartment = 68.70;
        if (nights > 14) {
            priceForStudio *= 0.80;
            priceForApartment *= 0.90;
        }
    }
    else if (season === "July" || season === "August") {
        priceForStudio = 76;
        priceForApartment = 77;
        if (nights > 14) {
            priceForApartment *= 0.90;
        }
    }
    console.log(`Apartment: ${(priceForApartment*nights).toFixed(2)} lv.`);
    console.log(`Studio: ${(priceForStudio*nights).toFixed(2)} lv.`);
}
hotelRoom1(["May", "15"]);
hotelRoom1(["June","14"]);
hotelRoom1(["August","20"]);

