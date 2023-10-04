function numberInRange1(args) {
    i = 0;
    let num = args[i];
    while (num < 1 || num > 100) {
        i++;
        num = args[i];
        console.log("Invalid number!");
    }
    console.log(`The number is: ${num}`);
}
numberInRange1([200, 1000, 3]);