function tournamentOfChristmas(args) {
    let days = Number(args[0]);
    let wins = 0;
    let lose = 0;
    let winMonyePerDay = 0;
    let totalWinMonye = 0;
    let daysWins = 0;
    let daysLose = 0;
    let index = 1;
    let command = args[index];
    for (let i = 1; i <= days; i++) {
        winMonyePerDay = 0;
        wins = 0;
        lose = 0;
        while (command !== "Finish") {
            let typeOfSPort = args[index];
            let result = args[++index];
            if (result === "win") {
                wins++;
                winMonyePerDay += 20;
            }
            else if (result === "lose") {
                lose++;
            }
            command = args[++index];
        }
        if (wins > lose) {
            winMonyePerDay *= 1.10;
            daysWins++;
        }
        else {
            daysLose++;
        }
        totalWinMonye += winMonyePerDay;
        command = args[++index];
    }
    if (daysWins > daysLose) {
        totalWinMonye *= 1.20;
        console.log(`You won the tournament! Total raised money: ${totalWinMonye.toFixed(2)}`);
    }
    else {
        console.log(`You lost the tournament! Total raised money: ${totalWinMonye.toFixed(2)}`);
    }
}
tournamentOfChristmas(["3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"])

