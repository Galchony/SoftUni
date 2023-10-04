function checkPrime(args) {
    let n = Number(args[0]);
    let prime = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0 || n <= 1) {
            prime = false;
            break;
        }
    }
    if ((prime && n > 2) ) {
        console.log("Prime")
    }
    else {
        console.log("Not prime");
    }
}
checkPrime(["2"])