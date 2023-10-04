function minNumber(args) {
    let num = 0; 
    let minNum = Number.POSITIVE_INFINITY;
    for (let i = 0; i<= Infinity; i++) {
        num = Number(args[i]);
        if (minNum>num){
            minNum=num;
        }
        num = args[i];
        if (num === "Stop"){
            break;
        }
    }
    console.log(minNum);
}
minNumber(["-10",
"20",
"-30",
"Stop"])

