function favoriteMovie(args) {
    let name = "";
    let bestFilmName = "";
    let valueOfStr = 0;
    let sumName = 0;
    let maxSumName = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < 7; i++) {
        name = args[i];
        sumName = 0;
        if (name === "STOP") {
            break;
        }
        for (let j = 0; j < name.length; j++) {
            valueOfStr = name[j].charCodeAt();
            sumName += valueOfStr;
            if(valueOfStr >=97 && valueOfStr <=122 ) {
                sumName -= 2*name.length;
            }
            if(valueOfStr >=65 && valueOfStr <=90 ) {
                sumName -= name.length;
            }
        }
        if (maxSumName < sumName) {
            maxSumName = sumName;
            bestFilmName = name;
        }
        if (i===6) {
            console.log(`The limit is reached.`);
        }
    }
console.log(`The best movie for you is ${bestFilmName} with ${maxSumName} ASCII sum.`);
}
favoriteMovie(["Wrong turn",
"The maze",
"Area 51",
"Night Club",
"Ice age",
"Harry Potter",
"Wizards"])

