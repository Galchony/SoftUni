function primeNumberChecker(num) {
    let isPrime = true;
    for (let i = 2; i < num / 2; i++) {
        if (i === num) {
            continue;
        }
        if (num % i === 0) {
            isPrime = false;
        }
    }
    console.log(isPrime);
}
primeNumberChecker(11);