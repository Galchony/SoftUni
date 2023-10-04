function barcodeGenerator(args) {
    let startNum = (args[0]);
    let finalNum = (args[1]);
    let result = "";
    let totalResult = "";
    for (let sym1 = startNum[0]; sym1 <= finalNum[0]; sym1++) {
        if (sym1 % 2 === 1) {
            for (let sym2 = startNum[1]; sym2 <= finalNum[1]; sym2++) {
                if (sym2 % 2 === 1) {
                    for (let sym3 = startNum[2]; sym3 <= finalNum[2]; sym3++) {
                        if (sym3 % 2 === 1) {
                            for (let sym4 = startNum[3]; sym4 <= finalNum[3]; sym4++) {
                                if (sym4 % 2 === 1) {
                                    result = `${sym1}${sym2}${sym3}${sym4}`;

                                    totalResult += `${(result)} `;

                                }
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(totalResult);
}
barcodeGenerator(["1365",
"5877"])

