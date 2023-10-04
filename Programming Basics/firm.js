function firm(args) {
    let neededHours = parseInt(args[0]);
    let days = parseInt(args[1]);
    let employee = parseInt(args[2]);

    let workedOutHours = Math.floor((days*0.9)*10*employee);
    if (workedOutHours>= neededHours) {
        console.log(`Yes!${(workedOutHours-neededHours)} hours left.`);
    }
    else {
        console.log(`Not enough time!${(neededHours-workedOutHours)} hours needed.`)
    }
}
firm(["99", "3", "1"]);