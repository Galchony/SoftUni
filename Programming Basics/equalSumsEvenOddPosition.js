function equalSumsEvenOddPosition(args) {
    let startNum = Number(args[0]);
    let finalNum = Number(args[1]);
    let sym = "";
    let oddSum = 0;
    let evenSum = 0;
    let result = "";
    for (let i = startNum; i <= finalNum; i++) {
        sym = String(i);
        oddSum = 0;
        evenSum = 0;
        for (let index = 0; index < 6; index++) {
            let num = Number(sym[index]);
            if (index % 2 === 0) {
                evenSum += num;
            }
            else {
                oddSum += num;
            }
        }
        if (evenSum === oddSum && evenSum !== 0) {
            result += `${sym} `;
        }
    }
    console.log(result);
}
equalSumsEvenOddPosition(["123456",
"124000"])

