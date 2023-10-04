function bestPlayer(args) {
    let index = 0;
    let command = args[index];
    let bestPlayer = "";
    let bestResult = Number.NEGATIVE_INFINITY;
    while (command !== "END") {
        let name = args[index];
        let countOfGoals = Number(args[++index]);
        if (bestResult < countOfGoals) {
            bestResult = countOfGoals;
            bestPlayer = name;
        }
        if (bestResult >=10){
            break;
        }
        command = args[++index];
    }
    console.log(`${bestPlayer} is the best player!`);
    if (bestResult >= 3) {
        console.log(`He has scored ${bestResult} goals and made a hat-trick !!!`);
    }
    else {
        console.log(`He has scored ${bestResult} goals.`);
    }
}
bestPlayer(["Petrov",
"2",
"Drogba",
"11"])
