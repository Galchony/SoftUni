function trekkingMania(args) {
    let countOfGroups = Number(args[0]);
    let countOfPeople = 0;
    let totalCountOfPeople = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i < countOfGroups + 1; i++) {
        countOfPeople = Number(args[i]);
        if (countOfPeople <= 5) {
            p1 += countOfPeople;
        }
        else if (countOfPeople <= 12) {
            p2 += countOfPeople;

        }
        else if (countOfPeople <= 25) {
            p3 += countOfPeople;

        }
        else if (countOfPeople <= 40) {
            p4 += countOfPeople;

        }
        else if (countOfPeople >= 41) {
            p5 += countOfPeople;

        }
        totalCountOfPeople += countOfPeople;
    }
    console.log((p1 / totalCountOfPeople * 100).toFixed(2) +"%");
    console.log((p2 / totalCountOfPeople * 100).toFixed(2) +"%");
    console.log((p3 / totalCountOfPeople * 100).toFixed(2) +"%");
    console.log((p4 / totalCountOfPeople * 100).toFixed(2) +"%");
    console.log((p5 / totalCountOfPeople * 100).toFixed(2) +"%");
}
trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])

