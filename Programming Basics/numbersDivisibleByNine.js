function numbersDivisibleByNine(args) {
    let n = Number(args[0]);
    let m = Number(args[1]);
    let num = 0;
    let sum = 0;
    for (let i = n; i <= m; i++) {
        num = i;
        if (num % 9 === 0) {
            sum += num;
        }
    }
    console.log(`The sum: ${sum}`);
    for (let i = n; i <= m; i++) {
        num = i;
        if (num % 9 === 0) {
            console.log(num);
        }
    }
}
numbersDivisibleByNine(["100", "200"])