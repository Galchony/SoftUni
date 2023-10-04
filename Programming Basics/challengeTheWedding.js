function challengeTheWedding(args) {
    let countOfMen = Number(args[0]);
    let countOfWomen = Number(args[1]);
    let countOfTables = Number(args[2]);
    let dates = "";
    let tables = 1;

    for (let m = 1; m <= countOfMen; m++) {
        for (let w = 1; w <= countOfWomen; w++) {
            if (tables > countOfTables) {
                break;
            }
            dates += `(${m} <-> ${w}) `
            tables++;
        }
        if (tables > countOfTables) {
            break;
        }
    }

    console.log(dates);
}
challengeTheWedding(["5", "8", "39"])