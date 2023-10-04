function test(args) {
    let num = Number(args[0]);
    if (num > 2) {
        console.log("Yes!");
    }
    else if (num > 7) {
        console.log("No!");
    }
    else {
        console.log("Maybe!");
    }


}
test(["9"]);