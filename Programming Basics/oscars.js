function oscars(args) {
    let name = args[0];
    let pointsFromAcademy = Number(args[1]);
    let countOfAppraiser = args[2];
    let totalPoint = pointsFromAcademy;
    for (let i = 3; i < (countOfAppraiser * 2 + 3); i += 2) {
        let nameOfAppraiser = args[i];
        let pointsOfAppraiser = Number(args[i + 1]);
        let points = nameOfAppraiser.length * pointsOfAppraiser / 2;
        totalPoint += points;
        if (totalPoint > 1250.5) {
            console.log(`Congratulations, ${name} got a nominee for leading role with ${totalPoint.toFixed(1)}!`);
            break;
        }
    }
    if (totalPoint<=1250.5) {
        console.log(`Sorry, ${name} you need ${(1250.5 - totalPoint).toFixed(1)} more!`);
    }
}
oscars(["Sandra Bullock",
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

