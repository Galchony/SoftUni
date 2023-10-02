function perfectNumber(num) {
    let sum = 0
    for (let i = 1; i <= num / 2; i++) {
        let result = num / i;
        if (Number.isInteger(result)) {
            sum += i;
        }
    }
    if (sum === num) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }
}
perfectNumber(28)