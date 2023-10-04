function sumPrimeNonPrime(args) {
    index = 0;
    let command = args[index];
    let num = 0;
    let primeNumSum = 0;
    let nonprimeNumSum = 0;
    while (command !== "stop") {
        num = Number(args[index]);
        if (num < 0) {
            console.log(`Number is negative.`);
            index++;
            command = args[index];
            continue;
        }
        if ((num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0) && num !== 2 && num !== 3 && num !== 5 && num !== 7) {
            nonprimeNumSum += num;
        }
        else {
            primeNumSum += num;
        }
        index++;
        command = args[index];
    }
    console.log(`Sum of all prime numbers is: ${primeNumSum}`);
    console.log(`Sum of all non prime numbers is: ${nonprimeNumSum}`);
}
sumPrimeNonPrime(["0",
"-9",
"0",
"stop"])


