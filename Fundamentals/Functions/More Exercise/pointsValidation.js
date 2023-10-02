function pointsValidation(array) {
    let xPointOne = array[0];
    let yPointOne = array[1];
    let xPointTwo = array[2];
    let yPointTwo = array[3];
    if (Number.isInteger(findDistancesBetweenTwoPoints(xPointOne, yPointOne, 0, 0))) {
        console.log(`{${xPointOne}, ${yPointOne}} to {0, 0} is valid`);
    } else {
        console.log(`{${xPointOne}, ${yPointOne}} to {0, 0} is invalid`);
    }
    if (Number.isInteger(findDistancesBetweenTwoPoints( xPointTwo, yPointTwo,0, 0))) {
        console.log(`{${xPointTwo}, ${yPointTwo}} to {0, 0} is valid`);
    } else {
        console.log(`{${xPointTwo}, ${yPointTwo}} to {0, 0} is invalid`);
    }
    if (Number.isInteger(findDistancesBetweenTwoPoints( xPointOne, yPointOne, xPointTwo, yPointTwo))) {
        console.log(`{${xPointOne}, ${yPointOne}} to {${xPointTwo}, ${yPointTwo}} is valid`);
    } else {
        console.log(`{${xPointOne}, ${yPointOne}} to {${xPointTwo}, ${yPointTwo}} is invalid`);
    }

    function findDistancesBetweenTwoPoints(x1, y1, x2, y2) {
        let doubleDistance = Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2);
        let distance = Math.sqrt(doubleDistance);
        return distance;
    }

}
pointsValidation([3, 0, 0, 4]);