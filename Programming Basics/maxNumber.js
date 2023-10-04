function maxNumber(args) {
    let index = 0;
    let num = args[index];
    let maxNum = Number.NEGATIVE_INFINITY;
    while (num !== "Stop") {
        num = Number(args[index]);
        if (num>maxNum){
            maxNum=num;
        }
        index++;
        num = args[index];
    }
    console.log(maxNum);
}
maxNumber(["-1",
"-2",
"Stop"])


