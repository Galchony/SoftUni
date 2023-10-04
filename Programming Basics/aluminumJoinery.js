function aluminumJoinery(args) {
    let countOfJoinery = Number(args[0]);
    let typeOfJoinery = args[1];
    let typeOfDelivery = args[2];
    let price = 0;
    let totalPrice = 0;
    switch (typeOfJoinery) {
        case "90X130":
            price = 110;
            if (countOfJoinery > 30 && countOfJoinery <= 60) {
                price *= 0.95;
            }
            else if (countOfJoinery > 60) {
                price *= 0.92;
            }
            break;
        case "100X150":
            price = 140;
            if (countOfJoinery > 40 && countOfJoinery <= 80) {
                price *= 0.94;
            }
            else if (countOfJoinery > 80) {
                price *= 0.90;
            }
            break;
        case "130X180":
            price = 190;
            if (countOfJoinery > 20 && countOfJoinery <= 50) {
                price *= 0.93;
            }
            else if (countOfJoinery > 50) {
                price *= 0.88;
            }
            break;
        case "200X300":
            price = 250;
            if (countOfJoinery > 25 && countOfJoinery <= 50) {
                price *= 0.91;
            }
            else if (countOfJoinery > 50) {
                price *= 0.86;
            }
            break;
    }
    totalPrice = price * countOfJoinery;
    if (typeOfDelivery === "With delivery") {
        totalPrice += 60;
    }
    if (countOfJoinery > 99) {
        totalPrice *= 0.96;
    }
    if (countOfJoinery <= 10) {
        console.log(`Invalid order`);
    }
    else {
        console.log(`${totalPrice.toFixed(2)} BGN`);
    }
}
aluminumJoinery(["2",
    "130X180",
    "With delivery"])

