function squareFrame(args) {
    let n = Number(args[0]);
    //console.log("+ " + "- ".repeat(n - 2) + "+")
    for (let row = 0; row < n; row++) {
        if (row == 0 || row == n - 1) {
            console.log("+ " + "- ".repeat(n - 2) + "+");
        }
        else {
            console.log("| " + "- ".repeat(n - 2) + "|")
        }
    }
    //console.log("+ " + "- ".repeat(n - 2) + "+")
}
squareFrame(["5"]);