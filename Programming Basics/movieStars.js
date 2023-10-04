function movieStars(args) {
    let budget = Number(args[0]);
    let index = 1;
    let command = args[index];
    let payForActor = 0;
    let sumOfPay = 0;
    while (sumOfPay <= budget) {
        command = args[index];
        if (command === "ACTION") {
            break;
        }
        if (command.length >15){
            payForActor= 0.20*(budget-sumOfPay);
            sumOfPay+=payForActor;
             index++;
            command=args[index];
            continue;
        }
        index++;
        payForActor = Number(args[index]);
        sumOfPay+=payForActor;
            index++;
        
    }
    if (budget >= sumOfPay) {
     console.log(`We are left with ${(budget-sumOfPay).toFixed(2)} leva.`);   
    }
    else {
        console.log(`We need ${(sumOfPay-budget).toFixed(2)} leva for our actors.`);
    }
}
movieStars(["170000",
"Ben Affleck",
"40000.50",
"Zahari Baharov",
"80000",
"Tom Hanks",
"2000.99",
"ACTION"])

