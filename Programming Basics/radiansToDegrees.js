function radiansToDegrees(args) {
    let rad = Number(args[0]);
    let degree = (rad * 180 / Math.PI);
    console.log(degree);
}
radiansToDegrees(["6.2832"]);
