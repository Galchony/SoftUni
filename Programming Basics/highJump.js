function highJump(args) {
    let wantHeight = Number(args[0]);
    let barHeight = wantHeight - 30;
    let index = 1;
    let attempt = Number(args[index]);
    let countOfUnsucsessAttempt = 0;
    let totalCount = 1;
    while (attempt <= wantHeight || barHeight !== wantHeight) {
        
        if (attempt > barHeight) {
            barHeight += 5;
            countOfUnsucsessAttempt = 0;
            attempt = Number(args[++index]);
        }
        else {
            countOfUnsucsessAttempt++;
            attempt = Number(args[++index]);

        }
        if (countOfUnsucsessAttempt === 3) {
            console.log(`Tihomir failed at ${barHeight}cm after ${totalCount} jumps.`);
            break;
        }
        totalCount++;
    }
    if (attempt>wantHeight) {
        console.log(`Tihomir succeeded, he jumped over ${barHeight}cm after ${totalCount} jumps.`);
    }
}
highJump(["231",
    "205",
    "212",
    "213",
    "228",
    "229",
    "230",
    "235"])
// highJump(["250",
//     "225",
//     "224",
//     "225",
//     "228",
//     "231",
//     "235",
//     "234",
//     "235"])

