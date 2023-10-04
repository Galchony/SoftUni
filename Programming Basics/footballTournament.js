function footballTournament(args) {
    let name = args[0];
    let countOfMatch = Number(args[1]);
    let result = "";
    let points = 0;
    let winsCount = 0;
    let lossCount = 0;
    let equalityCount = 0;
    let percentWins = 0;
    for (let row = 2; row < countOfMatch+2; row++) {
        result = args[row];
        if (result === "W") {
            points += 3;
            winsCount += 1;
        }
        else if (result=== "D") {
            points += 1;
            equalityCount +=1;
        }
        else if (result=== "L"){
            points += 0;
            lossCount +=1;
        }
        percentWins = winsCount/countOfMatch*100;
    }
    if (countOfMatch === 0) {
        console.log(`${name} hasn't played any games during this season.`);
    }
    else {
        console.log(`${name} has won ${points} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${winsCount}`);
        console.log(`## D: ${equalityCount}`);
        console.log(`## L: ${lossCount}`);
        console.log(`Win rate: ${percentWins.toFixed(2)}%`);
    }
}
footballTournament(["Liverpool", "10", "W", "D", "D", "W", "L", "W", "D", "D", "W", "W"])
