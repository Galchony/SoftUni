function footballResults(args) {
    let firstResult = Number(args[0][0]);
    let secondResult = Number(args[1][0]);
    let thirdResult = Number(args[2][0]);
    let firstResultOfOpponent = Number(args[0][2]);
    let secondResultOfOpponent = Number(args[1][2]);
    let thirdResultOfOpponent = Number(args[2][2]);
    let win = 0;
    let lose = 0
    let drawn = 0;
    if (firstResult > firstResultOfOpponent) {
        win++;
    }
    else if (firstResult === firstResultOfOpponent) {
        drawn++;
    }
    else if (firstResult < firstResultOfOpponent) {
        lose++;
    }

    if (secondResult > secondResultOfOpponent) {
        win++;
    }
    else if (secondResult === secondResultOfOpponent) {
        drawn++;
    }
    else if (secondResult < secondResultOfOpponent) {
        lose++;
    }

    if (thirdResult > thirdResultOfOpponent) {
        win++;
    }
    else if (thirdResult === thirdResultOfOpponent) {
        drawn++;
    }
    else if (thirdResult < thirdResultOfOpponent) {
        lose++;
    }
    console.log(`Team won ${win} games.`);
    console.log(`Team lost ${lose} games.`);
    console.log(`Drawn games: ${drawn}`);
}
footballResults(["4:2",
    "0:3",
    "1:0"])
