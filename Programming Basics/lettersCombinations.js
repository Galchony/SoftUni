function lettersCombinations(args) {
    let firstLetter = args[0];
    let lastLetter = args[1];
    let exceptLetter = args[2];
    let combinations = "";
    for (let i1 = firstLetter.charCodeAt(); i1 <= lastLetter.charCodeAt(); i1++) {
        let lett1 = String.fromCharCode(i1);
        if (lett1 !== exceptLetter) {
            for (let i2 = firstLetter.charCodeAt(); i2 <= lastLetter.charCodeAt(); i2++) {
                let lett2 = String.fromCharCode(i2);
                if (lett2 !== exceptLetter) {
                    for (let i3 = firstLetter.charCodeAt(); i3 <= lastLetter.charCodeAt(); i3++) {
                        let lett3 = String.fromCharCode(i3);
                        if (lett3 !== exceptLetter) {
                           combinations += `${lett1}${lett2}${lett3} `
                        }
                    }
                }
            }

        }
    }
    console.log(`${combinations}${combinations.length/4}`);
}
lettersCombinations(["a", "c", "z"])