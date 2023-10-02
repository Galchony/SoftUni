function signCheck(numOne, numTwo, numThree) {
    let sign = "Positive";
    if (numOne < 0) {
        sign = shoudChange(sign);
    }
    if (numTwo < 0) {
        sign = shoudChange(sign);
    }
     if (numThree < 0) {
        sign = shoudChange(sign);
    }
    function shoudChange(sign) {
        if (sign === "Positive") {
            return "Negative";
        } else {
            return "Positive";
        }

    }
    console.log(sign);
}
signCheck(5,
    12,
    -15
);