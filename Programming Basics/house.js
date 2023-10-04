function house(args) {
    let n = Number(args[0]);
    let star = "*";
    let dash = "-"
    let trait = "|";
    for (let row = 1; row <= Math.ceil(n / 2); row++) {
        if (n % 2 == 0) {
            console.log(dash.repeat((n - 2 * row) / 2) + star.repeat(2 * row) + dash.repeat((n - 2 * row) / 2));
        }
        else if (n % 2 == 1) {
            console.log(dash.repeat((n - (2 * row - 1)) / 2) + star.repeat(2 * row - 1) + dash.repeat((n - (2 * row - 1)) / 2))
        }
    }
    for (let row1 = 1; row1<=Math.floor(n / 2); row1++) {
        console.log(trait + star.repeat(n-2)+ trait);
    }
}
house(['8']);