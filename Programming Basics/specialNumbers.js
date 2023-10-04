function specialNumbers(args) {
    let n = Number(args[0]);
    let x = "";
    let result = "";
    let total = "";
    let isValid = true;

    for (let num = 1111; num <= 9999; num++) {
        let x = String(num);
        result = ""
        isValid = true;
        for (let i = 0; i <= 3; i++) {
            let z = Number(x[i]);
            if (n % z === 0) {
                result += `${x[i]}`;
            }
            else {
                isValid = false;
                break;
            }
        }
        if (isValid) {
        total += `${result} `;
        }
    }
    console.log(total);
}
specialNumbers(["16"]);