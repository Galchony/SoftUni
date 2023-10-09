function calc() {

// let firstNum = document.querySelector('input#num1').value;
// let secondNum = document.querySelector('input#num2').value;
// let result = Number(firstNum) + Number(secondNum);
// let sum = document.querySelector('input#sum');
// sum.value = result;

let num1 = Number(document.getElementById('num1').value);
let num2 = Number(document.getElementById('num2').value);
let result = document.getElementById('sum');
result.value = num1+num2;
}
