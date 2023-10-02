function triplesOfLatinLetters(params) {
    let number = Number(params);
    let result = "";
    for (let sym1 = 97; sym1 < 97 + number; sym1++) {

        for (let sym2 = 97; sym2 < 97 + number; sym2++) {
            for (let sym3 = 97; sym3 < 97 + number; sym3++) {
                result = `${String.fromCharCode(sym1)}${String.fromCharCode(sym2)}${String.fromCharCode(sym3)}`
                console.log(result);
            }
        }
    }
}
triplesOfLatinLetters("3");