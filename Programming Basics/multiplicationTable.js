function multiplicationTable(args) {
    let n = Number(args[0]);
    for (let index = 1; index <= 10; index++) {
        console.log(`${index} * ${n} = ${(n*index)}`);
            }
}
multiplicationTable(["5"])