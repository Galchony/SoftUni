function tom(args) {
    let holidays = parseInt(args[0]);
    let workDays = (365 - holidays);
    let minutesGame = (workDays * 63) + (holidays * 127);
    //let minutesInDay = (60 * 24);
    let normInM = 30000;
    let time = Math.abs(normInM - minutesGame);
    let h = 0;
    let m = 0;
    if (time > 60) {
         h += parseInt(time / 60);
         m += time % 60;
    }
    else {
         m +=time;
    }
    if (minutesGame > normInM) {
        console.log("Tom will run away")
        console.log(`${h} hours and ${m} minutes more for play`);
    }
    else {
        console.log("Tom sleeps well");
        console.log(`${h} hours and ${m} minutes less for play`);
    }
}
tom(["113"])
