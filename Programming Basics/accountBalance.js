function accountBalance(args) {
    let index = 0;
    let sum = args[index];
    let totalSum = 0;
    while (sum !== "NoMoreMoney") {
        sum = Number(args[index]);
        if (sum < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        totalSum += sum;
        console.log(`Increase: ${sum.toFixed(2)} `);
        index++;
        sum = args[index];
    }
    console.log(`Total: ${totalSum.toFixed(2)}`);
}
accountBalance(["120",
"45.55",
"-150"])

