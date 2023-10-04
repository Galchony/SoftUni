function specialNumbers(args) {
    let n = Number(args[0]);
    let sym = "";
    let isValid = true;
    let result = "";
    for (let i = 1111; i <= 9999; i++) {
        sym = String(i);
        isValid = true;
        for (let j = 0; j < 4; j++) {
            let num = Number(sym[j]);
            if (n % num !== 0 ) {
                isValid = true;
                break
            }
            else {
                isValid = false;
            }
        }
        if (isValid === false) {
            result += `${sym} `;
        }
    }
    console.log(result);
}
specialNumbers(["11"])