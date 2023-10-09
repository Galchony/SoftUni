function roadRadar(currentSpeed, area) {
    let speedLimitsObj = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };

    if (currentSpeed <= speedLimitsObj[area]) {
        console.log(`Driving ${currentSpeed} km/h in a ${speedLimitsObj[area]} zone`);
    } else {
        let difference = currentSpeed - speedLimitsObj[area];
        let status = '';
        if (difference <= 20) {
            status = 'speeding';
        } else if (difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimitsObj[area]} - ${status}`);
    }

}
roadRadar(200, 'motorway');