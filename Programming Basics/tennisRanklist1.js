function tennisRanklist(args) {
    let countOfTournaments = Number(args[0]);
    let startsPoints = Number(args[1]);
    let stage = "";
    let totalPoints = startsPoints;
    let currentPoints = 0;
    let wins = 0;
    for (let index = 2; index < 2 + countOfTournaments; index++) {
        stage = args[index];
        if (stage === "W") {
            currentPoints = 2000;
            wins++;
        }
        else if (stage === "F") {
            currentPoints = 1200;
        }
        else if (stage === "SF") {
            currentPoints = 720;
        }
        totalPoints += currentPoints;
    }
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor((totalPoints-startsPoints)/countOfTournaments)}`);
    console.log(`${(wins/countOfTournaments*100).toFixed(2)}%`);
}
tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"])

