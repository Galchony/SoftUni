function attachEventsListeners() {
    let btn = document.querySelector('input[type="button"]');
    btn.addEventListener('click', () => {
        let inputElement = document.querySelector('#inputDistance');
        let input = inputElement.value;
        let optionsInput = document.querySelector('select#inputUnits');
        // let optionsInputArr = Array.from(optionsInput);

        let otputElement = document.querySelector('input#outputDistance');
        let optionsOutput = document.querySelector('select#outputUnits');
        // let optionsOutputArr = Array.from(optionsOutput);
        let valueInput = optionsInput.value;
        let valueOutput = optionsOutput.value;
        let result = convert(input, valueInput, valueOutput);
        otputElement.value = result;
       
    })
    function convert(num, input, output) {
        let objInput = {
            km: num * 1000,
            m: num,
            cm: num / 100,
            mm: num / 1000,
            mi: num * 1609.34,
            yrd: num * 0.9144,
            ft: num * 0.3048,
            in: num * 0.0254

        }
        num = objInput[input];
        let objOutput = {
            km: num / 1000,
            m: num,
            cm: num * 100,
            mm: num * 1000,
            mi: num / 1609.34,
            yrd: num / 0.9144,
            ft: num / 0.3048,
            in: num / 0.0254
        }
        return num = objOutput[output];
    }
}