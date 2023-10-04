function stupidPasswordGenerator(args) {
    let n = Number(args[0]);
    let l = Number(args[1]);
    let pass = "";
    let sym1 = "";
    let sym2 = "";
    let sym3 = "";
    let sym4 = "";
    let sym5 = "";

    for (let i = 1; i <= n; i++) {
        sym1 = i;
        for (let j = 1; j <= n; j++) {
            sym2 = j;
            for (let h = 97; h < 97 + l; h++) {
                sym3 = String.fromCharCode(h);
                for (let f = 97; f < 97 + l; f++) {
                    sym4 = String.fromCharCode(f);
                    for (let z = 1; z <= n; z++) {
                        sym5 = z;
                        if (sym5 > sym1 && sym5 > sym2) {
                            pass += `${sym1}${sym2}${sym3}${sym4}${sym5} `;
                           // console.log(pass);

                        }
                    }
                }
            }
        }
    }
    console.log(pass);
   
}
stupidPasswordGenerator(["3", "1"]);