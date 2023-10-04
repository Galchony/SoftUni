function tennisRanklist(args) {
    let countOfTournament = Number(args[0]);
    let startPoints = Number(args[1]);
    let stage = "";
    let pointOfTournament = 0;
    let wins = 0;
    for (let i = 2; i < countOfTournament + 2; i++) {
        stage = args[i];
        if (stage === "W") {
            pointOfTournament += 2000;
            wins+=1;
        }
        else if (stage === "F") {
            pointOfTournament += 1200;
        }
        else if (stage === "SF") {
            pointOfTournament += 720;
        }
    }
    console.log(`Final points: ${startPoints+pointOfTournament}`);
    console.log(`Average points: ${Math.floor(pointOfTournament/countOfTournament)}`);
    console.log(`${(wins/countOfTournament*100).toFixed(2)}%`);
}
tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"])

