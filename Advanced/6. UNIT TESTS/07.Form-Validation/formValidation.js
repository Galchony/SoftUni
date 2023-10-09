function validate() {
    let usernameInputElement = document.getElementById('username');
    let emailInputElement = document.getElementById('email');
    let passwordInputElement = document.getElementById('password');
    let confirmPasswordInputElement = document.getElementById('confirm-password');
    let companyNumberInput = document.getElementById('companyNumber');
    let div = document.getElementById('valid');

    let usernamePattern = /^[A-Za-z0-9]{3,20}$/g;
    let emailPattern = /^\S*@\S*(\.)\S*$/g;
    let passPattern = /^\w{5,15}$/g;

    let checkBoxInput = document.getElementById('company');
    let companyInfoInput = document.getElementById('companyInfo');
    checkBoxInput.addEventListener('change', func1);
    function func1() {
        if (checkBoxInput.checked === true) {
            companyInfoInput.style.display = 'block';
        } else {
            companyInfoInput.style.display = 'none';
        }
    }
    let isValidObj = {
        usernameInputElement: () => /^[A-Za-z0-9]{3,20}$/g.test(usernameInputElement.value),
        emailInputElement: () => /^.*@.*(\.).*$/g.test(emailInputElement.value),
        passwordInputElement: () => /^\w{5,15}$/g.test(passwordInputElement.value) && confirmPasswordInputElement.value == passwordInputElement.value,
        confirmPasswordInputElement: () => (/^\w{5,15}$/g).test(confirmPasswordInputElement.value) && confirmPasswordInputElement.value == passwordInputElement.value,
        companyNumberInput: () => (companyNumberInput.value >= 1000 && companyNumberInput.value <= 9999)
    }
    let btn = document.getElementById('submit');
    btn.addEventListener('click', func);
    function func(e) {
        let isTrue = true;
        e.preventDefault();
        isValid(usernameInputElement, isValidObj.usernameInputElement());
        isValid(emailInputElement, isValidObj.emailInputElement());
        isValid(passwordInputElement, isValidObj.passwordInputElement());
        isValid(confirmPasswordInputElement, isValidObj.confirmPasswordInputElement());
        if (checkBoxInput.checked === true) {
            isValid(companyNumberInput, isValidObj.companyNumberInput());
        }
        isTrue ? div.style.display = 'block' : div.style.display = 'none';

        function isValid(el, validation) {
            let style = '';
            if (validation) {
                style = 'border:none';
                el.style.border = 'none';
            } else {
                style = 'border-color :red';
                isTrue = false;
            }
            el.style = style;
        }
    }
}
