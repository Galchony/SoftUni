function triangleOfDollars(args) {
    let n = Number(args[0]);
    let dollar ="";
    for (let row = 0; row<n; row++) {
        dollar+= "$ ";
        console.log(dollar);
    }
}
triangleOfDollars (["3"]);