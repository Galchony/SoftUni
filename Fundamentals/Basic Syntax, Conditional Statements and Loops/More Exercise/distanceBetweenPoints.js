function distanceBetweenPoints(x1, y1, x2, y2) {
    let triangleSideA = Math.abs(x1 - x2);
    let triangleSideB = Math.abs(y1 - y2);
    let powDistance = Math.pow(triangleSideA,2) + Math.pow(triangleSideB,2);
    let distance = Math.sqrt(powDistance);
    console.log(distance);
}
distanceBetweenPoints(2, 4, 5, 0);
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);