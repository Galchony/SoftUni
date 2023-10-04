function movieTickets(args) {
    let a1 = Number(args[0]);
    let a2 = Number(args[1]);
    let n = Number(args[2]);
    let sym1 = "";
    let sym2 = "";
    let sym3 = "";
    let sym4 = "";

    for (let i = a1; i <= a2 - 1; i++) {
        if (i % 2 === 1) {
            sym1 = String.fromCharCode(i);
            sym4 = Number(i);
            for (let j = 1; j <= n - 1; j++) {
                sym2 = Number(j);
                for (let h = 1; h <= ((n / 2) - 1); h++) {
                    sym3 = Number(h);
                    if ((sym2 + sym3 + sym4) % 2 === 1) {
                        console.log(`${sym1}-${sym2}${sym3}${sym4}`);
                    }
                }
            }
        }
    }
    //console.log(sym1);
}
movieTickets(["71",
"74",
"6"])

