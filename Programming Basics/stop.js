function stop(args) {
    let n = Number(args[0]);
    let point = ".";
    let dash = "_";
    console.log(point.repeat(n + 1) + dash.repeat(2 * n + 1) + point.repeat(n + 1));
    for (let row = 0; row < n; row++) {
        console.log(point.repeat(n - row) + "//" + dash.repeat(2 * n - 1 + 2 * row) + "\\\\" + point.repeat(n - row));
    }
    console.log("//" + dash.repeat((4*n+3-9)/2) + "STOP!" + dash.repeat((4*n+3-9)/2) + "\\\\");
    for (let row1 = 0; row1 < n; row1++) {
        console.log(point.repeat(row1) + "\\\\" + dash.repeat(4 * n - 1 - 2 * row1) + "//"+ point.repeat(row1));
    }
}
stop(["3"]);