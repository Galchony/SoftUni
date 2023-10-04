function rhombusOfStars(args) {
    let n = Number(args[0]);
    let star = "";
    let line = " "
    for (let row = 1; row <= (2 * n - 1); row++) {
        star += "* ";

        if (row > n) {
            star ="";
            for (let i = 1; i <= 2*n-row; i++) {
                star += "* ";
            }
            console.log(line.repeat(row-n) + star);
        }
        else {
        console.log(line.repeat(n-row) + star);
        }
    }
}
rhombusOfStars(["5"]);