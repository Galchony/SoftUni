function theSongOfTheWheels(args) {
    let controlValue = Number(args[0]);
    let result = "";
    let pass = "";
    let count = 0;
    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            if (b > a) {
                for (let c = 1; c <= 9; c++) {
                    for (let d = 1; d <= 9; d++) {
                        if (c > d) {
                            if (a * b + c * d === controlValue) {
                                result += `${a}${b}${c}${d} `
                                count++;
                                if (count === 4) {
                                    pass = `${a}${b}${c}${d}`;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (result !== "") {
        console.log(result);
    }
    if (pass !== "") {
        console.log(`Password: ${pass}`);
    }
    else {
        console.log(`No!`);
    }
}
theSongOfTheWheels(["11"]);