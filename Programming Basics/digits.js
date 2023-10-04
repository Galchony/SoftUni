function digits(args) {
    let num = String(args[0]);
    let digit1 = Number(num[0]);
    let digit2 = Number(num[1]);
    let digit3 = Number(num[2]);
    let n = digit1 + digit2;
    let m = digit1 + digit3;
    num = Number(args[0]);
    for (let i = 1; i <= n; i++) {
        let result = "";
        for (let index = 1; index <= m; index++) {

            if (num % 5 === 0) {
                num -= digit1;
            }
            else if (num % 3 === 0) {
                num -= digit2;
            }
            else {
                num += digit3;
            }
            result += `${num} `
        }
        console.log(result);
    }
}
digits([376])