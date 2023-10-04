function christmasTree(args) {
    let n = Number(args[0]);
    let line = " ";
    let star = "*";
    //console.log(line.repeat(n) + " | ");
    for (let row = 0; row<=n; row++){
        console.log(line.repeat(n-row) + star.repeat(row) + " | " + star.repeat(row));
    }
}
christmasTree(["4"]);   