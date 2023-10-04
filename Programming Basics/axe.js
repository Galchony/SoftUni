function axe(args) {
    let n = Number(args[0]);
    let star = "*";
    let dash = "-";
    console.log(dash.repeat(3 * n) + star.repeat(2) + dash.repeat(2 * n - 2));
    for (let row = 1; row < n; row++) {
        console.log(dash.repeat(3 * n) + star + dash.repeat(row) + star + dash.repeat(2 * n - 2 - row));

    }
    for (let row1 = 1; row1 <= n / 2; row1++) {
        console.log(star.repeat(3 * n) + star + dash.repeat(n - 1) + star + dash.repeat(n - 1));
    }
    for (let row3 = 1; row3 <= n / 2 - 1; row3++) {
        console.log(dash.repeat(3 * n - row3 + 1) + star + dash.repeat(n - 1 + 2 * (row3 - 1)) + star + dash.repeat(n - row3));

    }
    if (n % 2 == 0) {
        console.log((dash.repeat(5 * n - (2 * n - 1) - n / 2) + star.repeat(2 * n - 1) + dash.repeat(n / 2)));
    }
    else {
        console.log((dash.repeat(5 * n - (2 * n - 2) - (n / 2)) + star.repeat(2 * n - 2) + dash.repeat(n / 2+1)));
    }
}
axe(["5"])