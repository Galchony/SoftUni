function rectangleOfNByNStars(args) {
    let n = Number(args[0]);
    for (let row = 0; row < n; row++) {
        console.log("*".repeat(n));
    }
}
rectangleOfNByNStars(["2"]);