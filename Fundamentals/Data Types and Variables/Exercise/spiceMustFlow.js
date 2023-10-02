function spiceMustFlow(startingYield) {
    let days = 0;
    let totalYeald = 0;
    let isTrue = false;
    if (startingYield < 100) {
        days = 1;
        totalYeald = startingYield-2*26;
        if (startingYield < 2 * 26) {
            totalYeald = startingYield;         
        }
        console.log(0);
        console.log(0);
        isTrue = true;
    }
    while (startingYield >= 100) {
        days++;
        totalYeald += startingYield - 26;

        startingYield -= 10;
    }
    if (isTrue == false) {
        totalYeald -= 26;
        console.log(days);
        console.log(totalYeald);
    }
}
spiceMustFlow(99);
spiceMustFlow(450);
