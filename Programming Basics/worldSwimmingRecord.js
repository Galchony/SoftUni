function worldSwimmingRecord(args) {
let recordInSec = Number(args[0]);
let distanceInM = Number(args[1]);
let timeInSecForOneM = Number(args[2]);

let timeOfIvan = distanceInM*timeInSecForOneM;
let resistanceInSec = 12.5*(Math.floor(distanceInM/15));
if (distanceInM>=15) {
    timeOfIvan += resistanceInSec;
}

if (timeOfIvan<recordInSec){
    console.log(`Yes, he succeeded! The new world record is ${(timeOfIvan).toFixed(2)} seconds.`);
}
else {
    console.log(`No, he failed! He was ${(timeOfIvan-recordInSec).toFixed(2)} seconds slower.`);
}
}
worldSwimmingRecord(["10464", "1500", "20"]);
worldSwimmingRecord(["55555.67","3017","5.03"]);

