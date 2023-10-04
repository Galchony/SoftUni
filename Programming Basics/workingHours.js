function workingHours(args) {
    let hour = parseInt(args[0]);
    let day = args[1];
    if (hour >= 10 && hour <= 18 && day != "Sunday") {
        console.log("open");
    }
    else {
        console.log("closed");
    }
}
workingHours(["11",
"Sunday"])

