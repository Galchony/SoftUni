function butterfly(args) {
    let n = Number(args[0]);
    let star = "*";
    let dash = "-";
    for (let row = 0; row < 2 * (n - 2) + 1; row++) {
        if (row === n - 2) {
            console.log(" ".repeat(n - 1) + "@" + " ".repeat(n - 1));
        }
        else if (row < n - 2) {
            if (row % 2 === 0) {
                console.log(star.repeat(n - 2) + "\\" + " " + "/" + star.repeat(n - 2));
            }
            else {
                console.log(dash.repeat(n - 2) + "\\" + " " + "/" + dash.repeat(n - 2));
            }
        }
        else {
            if (row % 2 === 0) {
                console.log(star.repeat(n - 2) + "/" + " " + "\\" + star.repeat(n - 2));
            }
            else {
                console.log(dash.repeat(n - 2) + "/" + " " + "\\" + dash.repeat(n - 2));
            }
        }
    }
    }
    butterfly(["3"])