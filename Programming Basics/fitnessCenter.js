function fitnessCenter(args) {
    let countOfPeople = Number(args[0]);
    let countBack = 0;
    let countChest = 0;
    let countLegs = 0;
    let countAbs = 0;
    let countProteinShake = 0;
    let countProteinBar = 0;
    let countOfTrening = 0;
    let countOfProteinWant = 0;
    for (let index = 1; index <= countOfPeople; index++) {
        let activity = args[index];
        switch (activity) {
            case "Back": countBack++; countOfTrening++; break;
            case "Chest": countChest++; countOfTrening++; break;
            case "Legs": countLegs++; countOfTrening++; break;
            case "Abs": countAbs++; countOfTrening++; break;
            case "Protein shake": countProteinShake++; countOfProteinWant++; break;
            case "Protein bar": countProteinBar++; countOfProteinWant++; break;

        }
    }
    console.log(`${countBack} - back`);
    console.log(`${countChest} - chest`);
    console.log(`${countLegs} - legs`);
    console.log(`${countAbs} - abs`);
    console.log(`${countProteinShake} - protein shake`);
    console.log(`${countProteinBar} - protein bar`);
    console.log(`${(countOfTrening / countOfPeople * 100).toFixed(2)}% - work out`);
    console.log(`${(countOfProteinWant / countOfPeople * 100).toFixed(2)}% - protein`);
}
fitnessCenter(["10",
    "Back",
    "Chest",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar",
    "Protein shake",
    "Protein bar",
    "Legs",
    "Abs"])
