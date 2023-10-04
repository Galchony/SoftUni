function shopping(args) {
    let budget = Number(args[0]);
    let videoCards = parseInt(args[1]);
    let processors = parseInt(args[2]);
    let ramMemory = parseInt(args[3]);

    let videoCardsPrice = 250;
    let expenseForVideoCards = videoCards * videoCardsPrice;
    let processorsPrice = expenseForVideoCards * 0.35;
    let ramMemoryPrice = expenseForVideoCards * 0.1;
    let allExpense = expenseForVideoCards + processors * processorsPrice + ramMemory * ramMemoryPrice;
    if (videoCards > processors) {
        allExpense *= 0.85;
    }

        if (budget >= allExpense) {
            console.log(`You have ${(budget - allExpense).toFixed(2)} leva left!`);
        }
        else {
            console.log(`Not enough money! You need ${(allExpense - budget).toFixed(2)} leva more!`);
        }


}
shopping(["900", "2", "1", "3"]);
shopping(["920.45","3","1","1"]);

