function easterCompetition(args) {
    let countOfEasteBread = Number(args[0]);
    let totalGrade = 0;
    let maxGrade = Number.NEGATIVE_INFINITY;
    let index = 1;
    for (let i = 1; i <= countOfEasteBread; i++) {
        let name = args[index];
        totalGrade = 0;
        let command = args[++index];
        while (command != "Stop") {
            let grade = Number(args[index]);
            totalGrade += grade;
            command = args[++index];
        }
        console.log(`${name} has ${totalGrade} points.`);
        if (maxGrade < totalGrade) {
            maxGradeName = name;
            maxGrade = totalGrade;
            console.log(`${name} is the new number 1!`);
        }
        index++;
    }
    console.log(`${maxGradeName} won competition with ${maxGrade} points!`);
}
easterCompetition(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"])

