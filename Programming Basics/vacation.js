function vacation(args) {
    let neededMonye = Number(args[0]);
    let currentMoney = Number(args[1]);
    let index = 2;
    let command = args[index];
    let monye = 0;;
    let sum = currentMoney;
    let days = 0;
    let spendDays = 0;
    while (sum < neededMonye) {
        monye = Number(args[index + 1]);
        days++;
        if (command === "spend") {
            sum -= monye;
            spendDays++;
            if (sum < 0) {
                sum = 0;
            }
            if (spendDays === 5) {
                console.log(`You can't save the money.`);
                console.log(`${days}`);
                break;
            }
        }
        else if (command === "save") {
            sum += monye;
            spendDays = 0;
        }
        index += 2;
        command = args[index];
    }
    if (sum >= neededMonye) {
        console.log(`You saved the money for ${days} days.`);
    }
}
vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])

