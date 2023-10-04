function sumSeconds(args) {
    let firstResult = Number(args[0]);
    let secondResult = Number(args[1]);
    let thirdResult = Number(args[2]);

    let sumOfResults = firstResult + secondResult + thirdResult;
    let result = 0;
    let hours = 0;
    let minutes = 0;

    if (sumOfResults >= 60) {
        hours = Math.trunc(sumOfResults / 60);
        minutes = sumOfResults % 60;
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        
        result = (hours + ":" + minutes);
    }
    else {
        minutes = sumOfResults;
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        result = "0:" + minutes;
        
    }

    console.log(result);

}
sumSeconds(["14", "12", "10"]);