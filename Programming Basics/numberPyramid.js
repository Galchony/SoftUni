function numberPyramid(args) {
    let n = Number(args[0]);
    let num = 1;
    let result = "";
    for (let i = 1; i <= n; i++) {
        result = "";
        for (let j = 1; j <= i; j++) {

            result += `${num} `
            num++;
            if (num > n) {
                break;
            }
        }
        console.log(result);
        if (num > n) {
            break;
        }
    }
}
numberPyramid(["2"])