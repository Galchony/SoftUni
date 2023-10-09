function timeToWalk(steps, lengthOfFootprintInMeter, speed) {
    let distanceInMeter = steps * lengthOfFootprintInMeter;
    let speedInSeconds = (speed / 3600) * 1000;
    let restsInSeconds = Math.trunc(distanceInMeter / 500) * 60;
    let result = distanceInMeter / speedInSeconds + restsInSeconds;
    let hours = Math.trunc(result / 3600);
    let minutes = Math.trunc(result / 60);
    let seconds = Math.round(result - minutes * 60);
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    console.log(`${hours}:${minutes}:${seconds}`);
}
timeToWalk(2564, 0.70, 5.5 );