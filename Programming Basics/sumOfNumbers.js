function sumOfNumbers(args) {
    let n = args[0];
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        let digit = Number(n[i]);
        sum += digit;
    }
    console.log(sum);
}
sumOfNumbers(["564891"])