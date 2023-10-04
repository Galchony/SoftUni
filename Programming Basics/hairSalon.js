function hairSalon(args) {
    let targetOfDay = Number(args[0]);
    let profit = 0;
    let totalProfit = 0;
    let index = 1;
    let command = args[index];
    while (command !== "closed") {
        let service = args[index];
        if (service === "haircut") {
            let typeOfService = args[++index];
            if (typeOfService === "mens") {
                profit = 15;
            }
            else if (typeOfService === "ladies") {
                profit = 20;
            }
            else if (typeOfService === "kids") {
                profit = 10;
            }
        }
        else if (service === "color") {
            let typeOfService = args[++index];
            if (typeOfService === "touch up") {
                profit = 20;
            }
            else if (typeOfService === "full color") {
                profit = 30;
            }
        }
        totalProfit += profit;
        if (totalProfit >= targetOfDay) {
            break;
        }
        command = args[++index];
    }
    if (totalProfit >= targetOfDay) {
        console.log(`You have reached your target for the day!`);
    }
    else {
        console.log(`Target not reached! You need ${targetOfDay - totalProfit}lv. more.`);
    }
    console.log(`Earned money: ${totalProfit}lv.`);
}
hairSalon(["50",
"color",
"full color",
"haircut",
"ladies"])

