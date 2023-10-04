function happyCatParking(args) {
    let days = Number(args[0]);
    let hours = Number(args[1]);
    let sum = 0;
    let totalSumForDay = 0;
    let totalSum = 0;
    for (let i = 1; i <= days; i++) {
        totalSumForDay = 0;
        for (let j = 1; j <= hours; j++) {
            if (i % 2 === 0 && j % 2 === 1) {
                sum = 2.5;
            }
            else if (i % 2 === 1 && j % 2 === 0) {
                sum = 1.25;
            }
            else {
                sum=1;
            }
            totalSumForDay +=sum;
                 
        }
        console.log(`Day: ${i} - ${totalSumForDay.toFixed(2)} leva`);
        totalSum +=totalSumForDay;
    }
    console.log(`Total: ${totalSum.toFixed(2)} leva`);
}
happyCatParking(["2", "5"]);
