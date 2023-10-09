function sumOfNumbersNM(n, m) {
    let sum = 0;
    for (let i = Number(n); i <= Number(m); i++) {
        sum += i;
    }
    return sum;
}
console.log(sumOfNumbersNM('-8', '20'));