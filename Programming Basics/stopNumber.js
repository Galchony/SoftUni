function stopNumber(args) {
    let n = Number(args[0]);
    let m = Number(args[1]);
    let s = Number(args[2]);
    let result = "";

    for (let num = m; num >= n; num--) {
        if (num % 2 === 0 && num % 3 === 0) {
            if (num === s) {
                break;
            }
            result += `${num} `;
        }
    }
    console.log(result);
}
stopNumber(["1", "36", "12"])