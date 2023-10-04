function rectangleOf10By10Stars(params) {
    let n = "";
    for (let row = 0; row < 10; row++) {
        n = ""
        for (let col = 0; col < 10; col++) {
            n += "*"
            //console.log(n);
        }
        console.log(n);
    }
    //console.log(n);
}
rectangleOf10By10Stars()