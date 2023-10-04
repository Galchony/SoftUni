function cinemaVoucher(args) {
    let valueOfVoucher = Number(args[0]);
    let purchases = "";
    let priceOfPurchases = 0;
    let sumOfPurchases = 0;
    let countOfTickets = 0;
    let countOfOtherProducts = 0;
    for (let row = 1; row < Number.POSITIVE_INFINITY; row++) {
        purchases = args[row];
        if (purchases === "End") {
            break;
        }
        else {
            if (purchases.length > 8) {
                priceOfPurchases = purchases[0].charCodeAt() + purchases[1].charCodeAt();
                if (valueOfVoucher - sumOfPurchases < priceOfPurchases) {
                    break;
                }
                countOfTickets+=1;
            }
            else {
                priceOfPurchases = purchases[0].charCodeAt();
                if (valueOfVoucher - sumOfPurchases < priceOfPurchases) {
                    break;
                }
                countOfOtherProducts+=1;
            }
        }
               sumOfPurchases += priceOfPurchases;
    }
    console.log(countOfTickets);
    console.log(countOfOtherProducts);
}
cinemaVoucher(["300",
    "Captain Marvel",
    "popcorn",
    "Pepsi"])
    cinemaVoucher(["1500",
    "Avengers: Endgame",
    "Bohemian Rhapsody",
    "Deadpool 2",
    "End"])
    
