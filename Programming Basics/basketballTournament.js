function basketballTournament(args) {
    let index = 0;
    let command = args[index];
    let totalMatchCounter = 0;
    let wins = 0;
    let lost = 0;
    while (command !== "End of tournaments") {
        let nameOfTournaments = args[index];
               let n = Number(args[++index]);
        for (let i = 1; i <= n; i++) {
            totalMatchCounter++;
            let pointOfDesi = Number(args[++index]);
            let pointOfOpponents = Number(args[++index]);
            if (pointOfDesi > pointOfOpponents) {
                wins++;
                console.log(`Game ${i} of tournament ${nameOfTournaments}: win with ${pointOfDesi - pointOfOpponents} points.`);
            }
            else {
                lost++;
                console.log(`Game ${i} of tournament ${nameOfTournaments}: lost with ${pointOfOpponents - pointOfDesi} points.`);
            }

        }
        command = args[++index];
    }
    if (command === "End of tournaments") {
        console.log(`${(wins / totalMatchCounter * 100).toFixed(2)}% matches win`);
        console.log(`${(lost / totalMatchCounter * 100).toFixed(2)}% matches lost`);
    }
}
basketballTournament(["Ballers",
"3",
"87",
"63",
"56",
"65",
"75",
"64",
"Sharks",
"4",
"64",
"76",
"65",
"86",
"68",
"99",
"45",
"78",
"End of tournaments"])

