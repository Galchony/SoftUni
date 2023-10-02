function numberModification(num) {
    let stringOfNum = String(num);
    while (averageOfDigits(stringOfNum) <= 5) {
        stringOfNum += "9";
    }
    console.log(stringOfNum);


    function averageOfDigits(str) {
        let average = 0;
        let sum = 0;
        for (let index = 0; index < str.length; index++) {
            let digit = Number(str[index]);
            sum += digit;
        }
        average = sum / str.length;
        return average;
    }
}
numberModification(101);
numberModification(5835);