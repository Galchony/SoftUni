function skeleton(args) {
    let minutesOfPassCheck = Number(args[0]);
    let secundesOfPassCheck = Number(args[1]);
    let lengthInMeters = Number(args[2]);
    let timeInSecForHundredMeters = Number(args[3]);
    let delay = (lengthInMeters / 120) * 2.5;
    let timeOfMarin = lengthInMeters / 100 * timeInSecForHundredMeters - delay;
    let passCheck = minutesOfPassCheck * 60 + secundesOfPassCheck;
    if (timeOfMarin <= passCheck) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${timeOfMarin.toFixed(3)}.`);
    }
    else {
        console.log(`No, Marin failed! He was ${(timeOfMarin - passCheck).toFixed(3)} second slower.`);
    }

}
skeleton(["1",
"20",
"1546",
"12"])

