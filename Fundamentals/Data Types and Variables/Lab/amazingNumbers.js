function amazingNumbers(number) {
    let input = String(number);
    let num = 0;
    let sum = 0;
    let result;
    for (const el of input) {
        num = Number(el);
        sum += num;
    }
   // let digitsOfsum = String(sum);
    // for (const el of digitsOfsum) {
    //     let digit = Number(el);
    //     result = digit === 9 ? "True" : "False";
    // }
    let digit = sum.toString();
    result = digit.includes(9) ? "True" : "False";
    console.log(`${number} Amazing? ${result}`);

}
amazingNumbers(1233);
amazingNumbers(999);
amazingNumbers(9);