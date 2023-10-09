function validate() {
    let inputElement = document.getElementById('email');

    inputElement.addEventListener('change', func);

    function func (){
        let pattern = /^[a-z]+@[a-z]+.[a-z]+$/g;
        if ( pattern.test(inputElement.value)) {
            inputElement.classList.remove('error');
        } else {
            inputElement.classList.add('error');
        }
    }
}