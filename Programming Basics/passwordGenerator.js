function passwordGenerator(args) {
    let n = Number(args[0]);
    let l = Number(args[1]);
    let result = "";
    for (let sym1 = 1; sym1 <= n; sym1++) {
        for (let sym2 = 1; sym2 <= n; sym2++) {
            for (let sym3 = 97; sym3 < 97 + l; sym3++) {
                let s3 = String.fromCharCode(sym3);
                for (let sym4 = 97; sym4 < 97 + l; sym4++) {
                    let s4 = String.fromCharCode(sym4);
                    for (let sym5 = 1; sym5 <= n; sym5++) {
                        if (sym5 > sym1 && sym5 > sym2) {
                            result += `${sym1}${sym2}${s3}${s4}${sym5} `
                        }
                    }
                }
            }

        }
    }
    console.log(`${result}`);
}
passwordGenerator(["2", "4"]);