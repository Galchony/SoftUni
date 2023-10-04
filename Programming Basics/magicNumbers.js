function magicNumbers(args) {
    let n = Number(args[0]);
    let result = "";
    let sym1 = 0;
    let sym2 = 0;
    let sym3 = 0;
    let sym4 = 0;
    let sym5 = 0;
    let sym6 = 0;

    for (let i = 1; i <= n; i++) {
        sym1 = i;
        for (let j = 1; j <=n; j++) {
            sym2 = j;
            for (let h = 1; h <= n; h++) {
                sym3 = h;
                for (let f = 1; f <= n; f++) {
                    sym4 = f;
                    for (let z = 1; z <= n; z++) {
                        sym5 = z;
                        for (let index = 1; index <= n; index++) {
                            sym6 = index;
                            if (sym1 * sym2 * sym3 * sym4 * sym5 * sym6 === n) {
                                result += `${sym1}${sym2}${sym3}${sym4}${sym5}${sym6} `;
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(result);
}
magicNumbers(["2"]);