function cake(args) {
    let a = Number(args[0]);
    let b = Number(args[1]);
    let countOfPieces = a * b;
    let sumOfPieces = 0;
    let index = 2;
    let command = args[index];

    while (command !== "STOP") {
        pieces = Number(args[index]);
        sumOfPieces += pieces;
        if (sumOfPieces > countOfPieces) {
            console.log(`No more cake left! You need ${sumOfPieces - countOfPieces} pieces more.`);
            break;
        }
        index++;
        command = args[index];
    }
    if (command === "STOP") {
        if (sumOfPieces > countOfPieces) {
            console.log(`No more cake left! You need ${sumOfPieces - countOfPieces} pieces more.`);
        }
        else {
            console.log(`${countOfPieces-sumOfPieces} pieces are left.`);
        }
    }

}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

