function vetParking(args) {
    let countOfDays = Number(args[0]);
    let countOfHours = Number(args[1]);
    let price = 0;
    let priceForDay = 0;
    let totalPrice = 0;
    for (let i = 1; i <= countOfDays; i++) {
        priceForDay = 0;
        for (let j = 1; j <= countOfHours; j++) {
            if (i % 2 === 0 && j % 2 === 1) {
                price = 2.50;
            }
            else if (i % 2 === 1 && j % 2 === 0) {
                price = 1.25;
            }
            else {
                price = 1;
            }
            priceForDay += price;
        }
        totalPrice += priceForDay;
        console.log(`Day: ${i} - ${priceForDay.toFixed(2)} leva`);
    }
    console.log(`Total: ${totalPrice.toFixed(2)} leva`);
}
vetParking(["5",
    "2"])
