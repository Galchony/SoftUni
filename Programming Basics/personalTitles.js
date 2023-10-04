function personalTitles(args) {
    let age = Number(args[0]);
    let gender = args[1];
    if (gender === "m") {
        if (age >= 16) {
            console.log(("Mr."));
        }
        else {
            console.log("Master"); 
        }
    }
    else {
        if (age >= 16) {
            console.log(("Ms."));
        }
        else {
            console.log("Miss"); 
    }
}
}
personalTitles(["12","m"]);