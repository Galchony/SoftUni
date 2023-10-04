function rectangleOfNByNStars(args) {
    let n = Number(args[0]);
    let star = "";
    for (let row = 0; row < n; row++) {
        star = "";
        for (let col = 0; col < n; col++){
            star += "*";
        }
        console.log(star);
    }

}
rectangleOfNByNStars(["8"])
