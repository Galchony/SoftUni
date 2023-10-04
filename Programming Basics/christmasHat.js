function christmasHat(args) {
    let n = Number(args[0]);
    let point = ".";
    let star = "*";
    let dash = "-";
    console.log(point.repeat((4 * n - 2) / 2) + "/|\\" + point.repeat((4 * n - 2) / 2));
    console.log(point.repeat((4 * n - 2) / 2) + "\\|/" + point.repeat((4 * n - 2) / 2));
    console.log(point.repeat((4 * n - 2) / 2) + star.repeat(3) + point.repeat((4 * n - 2) / 2));
    for (let row = 1; row <= (2 * n - 1); row++) {
        //4*n +1
        console.log(point.repeat(2 * n - 1 - row) + star + dash.repeat(row) + star + dash.repeat(row) + star + point.repeat(2 * n - 1 - row));

    }
    console.log(star.repeat(4 * n + 1));
    console.log(star + (point + star).repeat(2 * n))
    console.log(star.repeat(4 * n + 1));

}
christmasHat(["7"]);