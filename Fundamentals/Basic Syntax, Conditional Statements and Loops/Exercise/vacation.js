function vacation(countOfPeople, type, day) {
    let price = 0;
    if (type == "Students") {
        if (day == "Friday") {
            price = 8.45;
        }
        else if (day == "Saturday") {
            price = 9.80;
        }
        else if (day == "Sunday") {
            price = 10.46;
        }
        if (countOfPeople >= 30) {
            price *= 0.85;
        }
    }
    else if (type == "Business") {
        if (day == "Friday") {
            price = 10.90;
        }
        else if (day == "Saturday") {
            price = 15.60;
        }
        else if (day == "Sunday") {
            price = 16;
        }
        if (countOfPeople >= 100) {
            countOfPeople -= 10;
        }
    }
    else if (type == "Regular") {
        if (day == "Friday") {
            price = 15;
        }
        else if (day == "Saturday") {
            price = 20;
        }
        else if (day == "Sunday") {
            price = 22.50;
        }
        if (countOfPeople >= 10 && countOfPeople <= 20) {
            price *= 0.95;
        }
    }
    let totalPrice = price * countOfPeople;
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
