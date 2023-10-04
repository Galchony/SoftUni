function housePainting(args) {
    let x = Number(args[0]);
    let y = Number(args[1]);
    let h = Number(args[2]);

    let wallFrontBack = 2 * (x * x) - (1.2 * 2);
    let wallSide = 2 * (x * y) - 2 * (1.5 * 1.5);
    let roof = 2 * (x * y) + 2 * ((x * h) / 2);
    let wallPaint = (wallFrontBack+wallSide)/3.4;
    let roofPaint = (roof)/4.3;

    console.log(wallPaint.toFixed(2));
    console.log(roofPaint.toFixed(2));
}
housePainting(["6", "10", "5.2"])