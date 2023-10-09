function deleteByEmail() {
   
    let inputElement = document.getElementsByName('email');
    let input = inputElement[0].value;
    let rows = document.querySelectorAll('#customers tbody tr');
    let resultElement = document.getElementById('result');
    for (const row of rows) {
        if (row.textContent.includes(input)) {
            row.parentElement.removeChild(row);
            resultElement.textContent = 'Deleted.';
            inputElement[0].value = '';
            return;
        } else {
            resultElement.textContent = 'Not found.';
        }
    }
    inputElement[0].value = '';
    
}