function easterEggsBattle(args) {
    let countOfEggsOnFirstGamer = Number(args[0]);
    let countOfEggsOnSecondGamer = Number(args[1]);
    let index = 2;
    let command = args[index];
    while (command !== "End") {
        winner = args[index];
        if (winner === "one") {
            countOfEggsOnSecondGamer--;
        }
        else if (winner === "two") {
            countOfEggsOnFirstGamer--;
        }
        if (countOfEggsOnFirstGamer === 0 || countOfEggsOnSecondGamer === 0) {
            break;
        }
        command = args[++index];
    }
if (countOfEggsOnFirstGamer === 0) {
    console.log(`Player one is out of eggs. Player two has ${countOfEggsOnSecondGamer} eggs left.`);
}
else if (countOfEggsOnSecondGamer === 0) {
    console.log(`Player two is out of eggs. Player one has ${countOfEggsOnFirstGamer} eggs left.`);
}
if (command=== "End") {
    console.log(`Player one has ${countOfEggsOnFirstGamer} eggs left.`);
    console.log(`Player two has ${countOfEggsOnSecondGamer} eggs left.`);
}
}
easterEggsBattle(["5", "4 ", "one", "two", "one", "two", "two", "End"])