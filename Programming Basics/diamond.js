function diamond(args) {
    let n = Number(args[0]);
    let dash = "-";
    let star = "*";
    if (n==1) {
        console.log("*");
    }
    else {
    for (let row = 1; row <= Math.ceil(n / 2-1); row++) {
        if (n % 2 == 0) {
            console.log(dash.repeat(Math.ceil(((n - 2) -(row * 2 - 2)) / 2)) + star + dash.repeat((row * 2 - 2)) + star + dash.repeat(Math.ceil(((n - 2) -(row * 2 - 2)) / 2)));
        }
        else {
            if (row == 1) {
                console.log(dash.repeat((n - 1) / 2) + star + dash.repeat((n - 1) / 2))
            }
            else {
                console.log(dash.repeat(Math.ceil(((n - 2) - (row * 2 - 3)) / 2)) + star + dash.repeat((row * 2 - 3)) + star + dash.repeat(Math.ceil(((n - 2) - (row * 2 - 3)) / 2)));
            }
        }
    }
    console.log(star + dash.repeat(n - 2) + star);

    for (let row1 = 1; row1 <= Math.ceil(n / 2 - 1); row1++) {
        if (n % 2 == 0) {
            console.log((dash.repeat(row1)) + star + dash.repeat(n - 2 - row1 * 2) + star + dash.repeat(row1));
        }
        else {
            if (row1 !== Math.ceil(n / 2 - 1)) {
                console.log((dash.repeat(row1)) + star + dash.repeat(n - 2 - row1 * 2) + star + dash.repeat(row1));
            } else {
                console.log(dash.repeat((n - 1) / 2) + star + dash.repeat((n - 1) / 2));
            }
        }

    }
    }
}
diamond([2]);