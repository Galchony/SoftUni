function numbersToN(args) {
    let n = Number(args[0]);
    let num = 1;
    for (let row = 1; row <= n; row++) {
        let result = "";
        for (let col = 0; col < row; col++) {
            result += num
            if (num > 1) {
                result += " ";
            }
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
numbersToN(["10"]);