function attachEventsListeners() {
    let buttons = Array.from(document.querySelectorAll('div input[type="button"]'));
    let daysInput = document.querySelector('div #days');
    let hoursInput = document.querySelector('div #hours');
    let minutesInput = document.querySelector('div #minutes');
    let secondsInput = document.querySelector('div #seconds');
    for (const btn of buttons) {
        btn.addEventListener('click', () => {
            let textElement = btn.parentElement.querySelector('input[type="text"]');
            if (textElement.id === 'days') {
                hoursInput.value = Number(textElement.value) * 24;
                minutesInput.value = Number(textElement.value) * 1440;
                secondsInput.value = Number(textElement.value) * 86400;
            } else if (textElement.id === 'hours') {
                daysInput.value = Number(textElement.value) / 24;
                minutesInput.value = Number(textElement.value) * 60;
                secondsInput.value = Number(textElement.value) * 3600;
            } else if (textElement.id === 'minutes') {
                daysInput.value = Number(textElement.value) / 1440;
                hoursInput.value = Number(textElement.value) / 60;
                secondsInput.value = Number(textElement.value) * 60;
            } else if (textElement.id === 'seconds') {
                daysInput.value = Number(textElement.value) / 86400;
                hoursInput.value = Number(textElement.value) /3600;
                minutesInput.value = Number(textElement.value)/ 60;
            }

        })
    }
}