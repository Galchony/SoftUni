function multiplyTable(args) {
    let num = args[0];
    let firstFinalSym = num[2];
    let secondFinalSym = num[1];
    let thirdFinalSym = num[0];
    for (let sym1 = 1; sym1 <= firstFinalSym; sym1++) {
        for (let sym2 = 1; sym2 <= secondFinalSym; sym2++) {
            for (let sym3 = 1; sym3 <= thirdFinalSym; sym3++) {
                let result = sym1 * sym2 * sym3;
                console.log(`${sym1} * ${sym2} * ${sym3} = ${result};`);
            }
        }
    }
}
multiplyTable(["222"])