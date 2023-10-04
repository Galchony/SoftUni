function trapeziodArea(args) {
    let b1 = parseFloat(args[0]);
    let b2 = parseFloat(args[1]);
    let h = parseFloat(args[2]);
    let result = (((b1+b2)*h)/2);
    console.log(result.toFixed(2));
}
trapeziodArea (["8", "13","7"]);