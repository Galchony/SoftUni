function pCGameShop(args) {
    let num = Number(args[0]);
    let game = "";
    let sumHearthstone = 0;
    let sumFornite = 0;
    let sumOverwatch = 0;
    let sumOthers = 0;
    for (let row = 1; row <= num; row++) {
        game = args[row];
        if (game === "Hearthstone") {
            sumHearthstone += 1;
        }
        else if (game === "Fornite") {
            sumFornite += 1;
        }
        else if (game === "Overwatch") {
            sumOverwatch += 1;
        }
        else {
            sumOthers += 1;
        }
    }
    let percentHearthstone = (sumHearthstone / num) * 100;
    let percentFornite = (sumFornite / num) * 100;
    let percentOverwatch = (sumOverwatch / num) * 100
    let percentOthers = (sumOthers / num) * 100;
    console.log(`Hearthstone - ${(percentHearthstone).toFixed(2)}%`);
    console.log(`Fornite - ${percentFornite.toFixed(2)}%`);
    console.log(`Overwatch - ${percentOverwatch.toFixed(2)}%`);
    console.log(`Others - ${percentOthers.toFixed(2)}%`);
}
pCGameShop([4, "Hearthstone", "Fornite", "Overwatch", "Counter - Strike"]);