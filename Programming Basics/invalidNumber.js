function invalidNumber(args) {
    let num = Number(args[0]);
    let isValid = "";
    if ((num >= 100 && num <= 200) || num === 0) {
        isValid = true
    }
if (isValid == false) {
    console.log("invalid");
}
}
invalidNumber(["-1"]);