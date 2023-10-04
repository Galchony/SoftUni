function sumDigits(args) {
    let n = Number(args[0]);
    let sum = 0;
    while (n != 0) {
        let num = n % 10;
        sum = sum + num;
        n = Math.floor(n / 10);
    }
    console.log(`Sum of digits: ${sum}`);


}
sumDigits(["1000045"]);