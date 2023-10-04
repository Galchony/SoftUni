function darts(args) {
    let name = args[0];
    let startPoints = 301;
    let finalPoints = 0;
    let currentPoints = 0;
    let index = 1;
    let command = args[index];
    let counter = 0;
    let noCounter = 0;
    while (command !== "Retire") {
        let field = args[index];
        let points = Number(args[++index]);
        if (field === "Single") {
            currentPoints = points;
            if (currentPoints > startPoints) {
                noCounter++;
                index++;
                command = args[index];
                continue;
            }
        }
        else if (field === "Double") {
            currentPoints = (2 * points);
            if (currentPoints > startPoints) {
                noCounter++;
                index++;
                command = args[index];
                continue;
            }
        }
        else if (field === "Triple") {
            currentPoints = (3 * points);
            if (currentPoints > startPoints) {
                noCounter++;
                index++;
                command = args[index];
                continue;
            }
        }
        
        finalPoints = startPoints - currentPoints;
        startPoints = finalPoints;
        counter++;
        if (startPoints === 0) {
            console.log(`${name} won the leg with ${counter} shots.`);
            break;
        }
        command = args[++index];
    }
    if (command === "Retire") {
        console.log(`${name} retired after ${noCounter} unsuccessful shots.`);
    }


}
darts(["Rob Cross",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"20",
"Triple",
"20",
"Double",
"5",
"Triple",
"10",
"Double",
"6",
"Retire"])
