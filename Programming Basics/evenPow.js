function evenPow(args) {
    let n = Number(args[0]);
    let num = 1;
    for (let row = 0; row <= (n / 2); row++) {
        console.log(num);
        num = (num * 2 * 2);
    }
}
evenPow(['10']);