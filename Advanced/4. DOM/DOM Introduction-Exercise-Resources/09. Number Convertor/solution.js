function solve() {
    let a = document.createElement('option');;
    a.textContent = 'Binary';
    a.value = 'binary';
    let b = document.createElement('option');
    b.textContent = 'Hexadecimal'
    b.value = 'hexadecimal'
    let c = document.getElementById('selectMenuTo');
    c.appendChild(a);
    c.appendChild(b);
    let buttonElement = document.getElementsByTagName('button')[0];
    buttonElement.addEventListener('click', res);

    function res() {
        let inputNum = Number(document.getElementById('input').value);
        let resultElement = document.getElementById('result');
        if (a.selected === true) {
            resultElement.value = inputNum.toString(2);
        } else if (b.selected === true) {
            let result = inputNum.toString(16);
           
            resultElement.value = result.toUpperCase();
        }
    }
}