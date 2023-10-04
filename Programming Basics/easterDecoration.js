function easterDecoration(args) {
    let countOfCustomers = Number(args[0]);
    let countOfProduct = 0;
    let price = 0;
    let totalPrice = 0;
    let index = 1;
    let command = args[index];
    let finalTotalPrice = 0;
    for (let i = 1; i <= countOfCustomers; i++) {
        countOfProduct = 0;
        totalPrice = 0;
        while (command !== "Finish") {
            countOfProduct++;
            let product = args[index];
            if (product === "basket") {
                price = 1.50;
            }
            else if (product === "wreath") {
                price = 3.80;
            }
            else if (product === "chocolate bunny") {
                price = 7.00;
            }
            
            totalPrice += price;
            command = args[++index];
        }
        if (countOfProduct % 2 === 0) {
            totalPrice *= 0.80;
        }
        console.log(`You purchased ${countOfProduct} items for ${(totalPrice).toFixed(2)} leva.`);
        command = args[++index];
        finalTotalPrice += totalPrice;
    }
    console.log(`Average bill per client is: ${(finalTotalPrice/countOfCustomers).toFixed(2)} leva.`);
}
easterDecoration(["2",
    "basket",
    "wreath",
    "chocolate bunny",
    "Finish",
    "wreath",
    "chocolate bunny",
    "Finish"])
