function safePasswordsGenerator(args) {
    let finalX = Number(args[0]);
    let finalY = Number(args[1]);
    let countOfPass = Number(args[2]);

    let x = "";
    let y = "";
    let count = 0;
    let pass = "";
    let s1 = 35;
    let s2 = 64;
    let sym1 = "";
    let sym2 = "";
    for (let s3 = 1; s3 <= finalX; s3++) {
        x = s3;
        for (let s4 = 1; s4 <= finalY; s4++) {
            y = s4;
            sym1 = String.fromCharCode(s1);
            sym2 = String.fromCharCode(s2);
            count += 1;
            if (count > countOfPass) {
                break;
            }
            pass += `${sym1}${sym2}${x}${y}${sym2}${sym1}|`;
            s1++;
            s2++;
            if (s1 > 55) {
                s1 = 35;
            }
            if (s2 > 96) {
                s2 = 64;
            }

        }
        if (count > countOfPass) {
            break;
        }
    }

    console.log(pass);
}
safePasswordsGenerator(["2", "5", "9"]);