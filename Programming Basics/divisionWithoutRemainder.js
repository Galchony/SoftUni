function divisionWithoutRemainder(args) {
    let n = Number(args[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    for (let i = 1; i <= n; i++) {
        num = Number(args[i]);
        if (num % 2 === 0) {
            p1++;
        }
        if (num % 3 === 0) {
            p2++;
        }
        if (num % 4 === 0) {
            p3++;
        }
    }
    console.log(`${(p1/n*100).toFixed(2)}%`);
    console.log(`${(p2/n*100).toFixed(2)}%`);
    console.log(`${(p3/n*100).toFixed(2)}%`);
}
divisionWithoutRemainder(["3",
"3",
"6",
"9"])

