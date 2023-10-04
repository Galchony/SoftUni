function highJump1(args) {
    let wantHeight = Number(args[0]);
    let barHeight = wantHeight - 30;
    let attempt = 0;
    let countOfUnsucsessAttempt = 0;
    let totalCount = 1;
    for (let index = 1; index < args.length; index++) {
        attempt = Number(args[index]);
        if (attempt > barHeight) {
            if (barHeight >= wantHeight) {
                break;
            }
            else {
            barHeight += 5;
            countOfUnsucsessAttempt = 0;
            }
        }
        else {
            countOfUnsucsessAttempt++;

        }
        if (countOfUnsucsessAttempt === 3) {
            console.log(`Tihomir failed at ${barHeight}cm after ${totalCount} jumps.`);
            break;
        }
        totalCount++;
    }
    if (attempt > wantHeight) {
        console.log(`Tihomir succeeded, he jumped over ${barHeight}cm after ${totalCount} jumps.`);
    }
}
highJump1(["231",
    "205",
    "212",
    "213",
    "228",
    "229",
    "230",
    "235"])