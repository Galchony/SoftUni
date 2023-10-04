function workout(args) {
    let countOfDays = Number(args[0]);
    let distanceInFirstDay = Number(args[1]);
    let currentDistance = 0;
    let totalDistance = distanceInFirstDay;
    for (let i = 2; i < countOfDays+2; i++) {
        let percent = Number(args[i])
        currentDistance = distanceInFirstDay + (distanceInFirstDay*percent/100);
        distanceInFirstDay = currentDistance;
        totalDistance +=currentDistance;
    }
    if (totalDistance>=1000) {
    console.log(`You've done a great job running ${Math.ceil(totalDistance-1000)} more kilometers!`);
    }
    else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000-totalDistance)} more kilometers`);
    }
}
workout(["4",
"100",
"30",
"50",
"60",
"80"])

