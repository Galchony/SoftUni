function oscars1(args) {
    let name = args[0];
    let startPoints = Number(args[1]);
    let countOfAppraiser = Number(args[2]);
    let index = 3;
    let nameOfAppraiser = args[index];
    let points = 0;
    let sumOfPoints = startPoints;
    let counter = 0;
    while (sumOfPoints <= 1250.5) {
        index++;
        points = Number(args[index]);
        sumOfPoints = sumOfPoints + (points * nameOfAppraiser.length / 2);
        index++;
        nameOfAppraiser = args[index];
        counter++;
        if (counter === countOfAppraiser) {
            break;
        }
    }
    if (sumOfPoints > 1250.5) {
        console.log(`Congratulations, ${name} got a nominee for leading role with ${sumOfPoints.toFixed(1)}!`);
    }
    else {
        console.log(`Sorry, ${name} you need ${(1250.5 - sumOfPoints).toFixed(1)} more!`);
    }

}
oscars1(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

