function nameGame(args) {
    let num1 = Number(args[0].length);
    let num2 = Number(args[num1 + 1].length);
    let nameFirstGamer = args[0];
    let nameSecondGamer = args[num1 + 1];
    let stop = "";
    let firstGamerNums = 0;
    let secondGamerNums = 0;
    let sumFirstGamerPoint = 0;
    let sumSecondGamerPoint = 0;
    let i = 0;
    for (let row = 0; row < num1; row++) {
        firstGamerNums = parseInt(args[row + 1]);
        stop = firstGamerNums;
        if (stop === "Stop") {
            break;
        }
        else {
            if (nameFirstGamer[row] === String.fromCharCode(firstGamerNums)) {
                sumFirstGamerPoint += 10;
            }
            else {
                sumFirstGamerPoint += 2;
            }
        }
    }
    for (let row1 = num1 + 1; row1 <= num1 + num2; row1++) {
        secondGamerNums = parseInt(args[row1 + 1]);
        stop = secondGamerNums;
        
        if (stop === "Stop") {
            break;
        }
        else {
        if (nameSecondGamer[i] === String.fromCharCode(secondGamerNums)) {
            sumSecondGamerPoint += 10;
        }
        else {
            sumSecondGamerPoint += 2;
        }
        i++;
    }
    }
    if (sumFirstGamerPoint > sumSecondGamerPoint) {
        console.log(`The winner is ${nameFirstGamer} with ${sumFirstGamerPoint} points!`);
    }
    else {
        console.log(`The winner is ${nameSecondGamer} with ${sumSecondGamerPoint} points!`);
    }

}
nameGame(["Ivo", 80, 65, 87,"Ivan", 73, 20, 98, 110, "Stop"]);
// nameGame(["Pesho", "124", "34", "111", "97", "99", "Gosho", "98", "124", "88", "76", "18", "Stop"]);
// //nameGame(["Pesho", 124, 34, 111, 97, 99, "Gosho", 98, 124, 88, 76, 18, "Stop"])
// nameGame(["Ivan",    "73",    "20",    "98",    "110",    "Ivo",    "80",    "6",    "87",    "Stop"])



