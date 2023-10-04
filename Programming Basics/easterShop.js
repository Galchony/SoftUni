function easterShop(args) {
    let startQuantityOfEggs = Number(args[0]);
    let index = 1;
    let command = args[index];
    let currentQuantity = 0;
    let countOfSoldEggs = 0;
    while (command !== "Close") {
        let act = command;
        let countOfEggs = Number(args[++index]);
        if (act === "Buy") {
            if (countOfEggs > startQuantityOfEggs) {
                console.log(`Not enough eggs in store!`);
                console.log(`You can buy only ${startQuantityOfEggs}.`);
                break;
            }
            else {
            currentQuantity = startQuantityOfEggs - countOfEggs;
            startQuantityOfEggs = currentQuantity;
            countOfSoldEggs += countOfEggs;
            }
        }
        else if (act === "Fill") {
            currentQuantity = startQuantityOfEggs + countOfEggs;
            startQuantityOfEggs = currentQuantity;
        }
        
        command = args[++index];
    }
    if (command === "Close") {
        console.log(`Store is closed!`);
        console.log(`${countOfSoldEggs} eggs sold.`);
    }
}
easterShop(["13",
    "Buy",
    "8",
    "Fill",
    "3",
    "Buy",
    "10"])
