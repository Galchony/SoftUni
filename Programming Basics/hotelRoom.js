function hotelRoom(args) {
    let month = args[0];
    let countOfOvernightStay = Number(args[1]);
    let priceForStudio = 0;
    let priceForApartment = 0;

    if (month === "May" || month === "October") {
        priceForStudio += 50;
        priceForApartment += 65;
    }
    if (month === "June" || month === "September") {
        priceForStudio += 75.2;
        priceForApartment += 68.7;
    }
    if (month === "July" || month === "August") {
        priceForStudio += 76;
        priceForApartment += 77;
    }

    if (countOfOvernightStay > 7 & countOfOvernightStay <= 14 & (month === "May" || month === "October")) {
        priceForStudio *= 0.95;
    }
    if (countOfOvernightStay > 14 & (month === "May" || month === "October")) {
        priceForStudio *= 0.70;
    }
    if (countOfOvernightStay > 14 & (month === "June" || month === "September")) {
        priceForStudio *= 0.80;
    }
    if (countOfOvernightStay > 14) {
        priceForApartment *= 0.90;
    }
    let allPriceInApartment = (priceForApartment * countOfOvernightStay).toFixed(2);
    let allPriceInStudio = (priceForStudio * countOfOvernightStay).toFixed(2);
    console.log(`Apartment: ${allPriceInApartment} lv.`);
    console.log(`Studio: ${allPriceInStudio} lv.`);
}
hotelRoom(["September", "10"]);