function factorialDivision(firstNum, secondNum) {
    let total = factorial(firstNum) / factorial(secondNum);
    console.log(total.toFixed(2));

    function factorial(a) {
        let result = 1;
        for (let index = 1; index <= a; index++) {
            result *= index;
        }
        return result;
    }
}
factorialDivision(5,
    2
)