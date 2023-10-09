function calculator() {
    let obj = {
        num1: '',
        num2: '',
        resultElement: '',
        init(selector1, selector2, resultSelector) {
            this.num1 = document.querySelector(selector1);
            this.num2 = document.querySelector(selector2);
            this.resultElement = document.querySelector(resultSelector);
        },
        add() {
            this.resultElement.value = Number(this.num1.value) + Number(this.num2.value);
        },
        subtract() {
            this.resultElement.value = this.num1.value - this.num2.value;
        }
    }

    return obj;
}
const calculate = calculator();
calculate.init('#num1', '#num2', '#result');





