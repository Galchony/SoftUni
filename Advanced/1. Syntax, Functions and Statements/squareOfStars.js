function squareOfStars(num) {
    if (num == undefined) {
        num = 5;
    }
    let star = "* ";
    for (let i = 0; i < num; i++) {
        console.log(star.repeat(num));
    }
}
squareOfStars(2)