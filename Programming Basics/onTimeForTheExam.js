function onTimeForTheExam(args) {
    let hourOfExam = Number(args[0]);
    let minutesOfExam = Number(args[1]);
    let hourOfArrival = Number(args[2]);
    let minutesOfArrival = Number(args[3]);

    let timeOfExamInMitutes = hourOfExam * 60 + minutesOfExam;
    let timeOfArrivalInMitutes = hourOfArrival * 60 + minutesOfArrival;
    let diff = timeOfExamInMitutes - timeOfArrivalInMitutes;
    let diffH = Math.floor(Math.abs(diff) / 60);
    let diffM = Math.abs(diff) % 60;

    if (diff > 30) {
        console.log(`Early`);
        if (diff < 60) {
            console.log(`${diffM} minutes before the start`);
        }
        else {
            if (diffM < 10) {
                diffM = "0" + diffM;
            }
            console.log(`${diffH}:${diffM} hours before the start`);
        }
    }
    else if (diff === 0) {
        console.log(`On time`);
    }
    else if (diff <= 30 && (diff) > 0) {
        console.log(`On time`);
        console.log(`${diffM} minutes before the start`);
    }
    else {
        console.log(`Late`);
        if (Math.abs(diff) < 60) {
            console.log(`${diffM} minutes after the start`);
        }
        else {
            if (diffM < 10) {
                diffM = "0" + diffM;
            }
            console.log(`${diffH}:${diffM} hours after the start`);
        }
    }


}
onTimeForTheExam(["9", "00", "9", "0"]);
