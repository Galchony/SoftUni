function travelAgency(args) {
    let town = args[0];
    let type = args[1];
    let vipDiscount = args[2];
    let days = Number(args[3]);

    let priceForDay = 0;
    let discount = 0;
    if (town === "Bansko" || town === "Borovets") {
        if (type === "withEquipment") {
            priceForDay = 100;
            if (vipDiscount === "yes") {
                discount = 10 / 100 * priceForDay;
            }
        }
        if ((type === "noEquipment")) {
            priceForDay = 80;
            if (vipDiscount === "yes") {
                discount = 5 / 100 * priceForDay;
            }
        }
    }
    else if (town === "Varna" || town === "Burgas") {
        if (type === "withBreakfast") {
            priceForDay = 130;
            if (vipDiscount === "yes") {
                discount = 12 / 100 * priceForDay;
            }
        }
        if ((type === "noBreakfast")) {
            priceForDay = 100;
            if (vipDiscount === "yes") {
                discount = 7 / 100 * priceForDay;
            }
        }
    }
    if (days > 7) {
        days -= 1;
    }
    if (days < 1) {
        console.log(`Days must be positive number!`);
    }
    else if ((type !== "noEquipment" && type !== "withEquipment" && type !== "noBreakfast" && type !== "withBreakfast") || (town !== "Bansko" && town !== "Borovets" && town !== "Burgas" && town !== "Varna")) {
        console.log("Invalid input!");
    }
    else {
        console.log(`The price is ${((priceForDay - discount) * days).toFixed(2)}lv! Have a nice time!`);
    }

}
//travelAgency(["Borovets", "noEquipment", "yes", 6]);
travelAgency(["Borovets", "noBreakfast", "yes", 3]);