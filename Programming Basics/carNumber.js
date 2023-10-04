function carNumber(args) {
    let startDigit = Number(args[0]);
    let endDigit = Number(args[1]);
    let carNums = "";
    for (let sym1 = startDigit; sym1 <= endDigit; sym1++) {
        for (let sym2 = startDigit; sym2 <= endDigit; sym2++) {
            for (let sym3 = startDigit; sym3 <= endDigit; sym3++) {
                for (let sym4 = startDigit; sym4 <= endDigit; sym4++) {
                    if ((sym1 % 2 === 1) && (sym4 % 2 === 0) && (sym1 > sym4) && ((sym2 + sym3) % 2 === 0)) {
                        carNums += `${sym1}${sym2}${sym3}${sym4} `
                    }
                    else if ((sym1 % 2 === 0) && (sym4 % 2 === 1) && (sym1 > sym4) && ((sym2 + sym3) % 2 === 0)) {
                        carNums += `${sym1}${sym2}${sym3}${sym4} `
                    }

                }
            }
        }
    }
    console.log(carNums);
}
carNumber(["3", "5"]);