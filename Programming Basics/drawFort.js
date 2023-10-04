function drawFort(args) {
    let n = Number(args[0]);
    console.log("/" + "^".repeat(Math.floor(n / 2)) + "\\" + "_".repeat(2 * n - 4 - 2 * Math.floor(n / 2)) + "/" + "^".repeat(Math.floor(n / 2)) + "\\");
    for (let row = 1; row < n - 2; row++) {
        console.log("|" + " ".repeat(2 * n - 2) + "|");
    }
    if (2 * n - 4 - 2 * Math.floor(n / 2) > 0) {
        console.log("|" + " ".repeat(Math.floor(n / 2) + 1) + "_".repeat(2 * n - 4 - 2 * Math.floor(n / 2)) + " ".repeat(Math.floor(n / 2) + 1) + "|");
    }
    else {
        console.log("|" + " ".repeat(2 * n - 2) + "|");
    }
    console.log("\\" + "_".repeat(Math.floor(n / 2)) + "/" + " ".repeat((2 * n - 4 - 2 * Math.floor(n / 2))) + "\\" + "_".repeat(Math.floor(n / 2)) + "/");
}
drawFort(["3"])