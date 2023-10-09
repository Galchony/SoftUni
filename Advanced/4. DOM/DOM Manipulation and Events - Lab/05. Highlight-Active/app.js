function focused() {
    let inputs = document.querySelectorAll('body div div input');
    for (const input of Array.from(inputs)) {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused');
        });
    }
}