function backToThePast(args) {
    let inheritance = Number(args[0]);
    let lastYear = parseInt(args[1]);

    let age = 18;
    let firstYear = 1800;
    let expense = 0;
    let allExpense = 0;

    for (let row = firstYear; row <= lastYear; row++) {
        if (row % 2 === 0) {
            expense = 12000;
        }
        else {
            expense = 12000 + 50 * age;
        }
        age += 1;
        allExpense += expense;
    }
    if (allExpense <= inheritance) {
        console.log(`Yes! He will live a carefree life and will have ${(inheritance-allExpense).toFixed(2)} dollars left.`);
        console.log(``);
    } else {
        console.log(`He will need ${(allExpense-inheritance).toFixed(2)} dollars to survive.`);
    }

}
backToThePast(["100000.15", "1808"]);