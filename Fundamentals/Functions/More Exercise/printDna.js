function printDna(num) {
    let sequence = "ATCGTTAGGG";
    for (let index = 1; index <= num; index++) {
        let text = printDNA(index, sequence);
        console.log(text);
    }

    function printDNA(a, sequence) {
        let result = "";
        let buff = Math.ceil(a / 4);
        sequence = sequence.repeat(buff);
        if (a % 4 === 1) {
            result = `**${sequence[a * 2 - 2]}${sequence[(a * 2 -1)]}**`;
        } else if (a % 4 === 2) {
            result = `*${sequence[(a * 2 - 2)]}--${sequence[(a * 2 -1)]}*`;
        } else if (a % 4 === 3) {
            result = `${sequence[(a * 2 - 2)]}----${sequence[(a * 2 -1)]}`;
        } else if (a % 4 === 0) {
            result = `*${sequence[(a * 2 - 2)]}--${sequence[(a * 2 -1)]}*`;
        }
        return result;
    }
}
printDna(4)