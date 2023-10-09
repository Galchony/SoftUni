function validate() {
    let inputElement = document.getElementById('email');
    inputElement.addEventListener('change', () => {
        let pattern = /[a-z]+@[a-z]+.[a-z]+/g;
        let input = inputElement.value;
        let match = input.match(pattern);
        if (match === null) {
            inputElement.classList.add('error');
        } else {
            inputElement.classList.remove('error');
        }
    })
}