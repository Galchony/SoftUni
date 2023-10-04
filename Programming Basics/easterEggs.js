function easterEggs(args) {
    let countOfEggs = Number(args[0]);
    let colorOfEggs = "";
    let countOfRedEggs = 0;
    let countOfOrangeEggs = 0;
    let countOfBlueEggs = 0;
    let countOfGreenEggs = 0;
    let maxCollor = "";
    let maxCount = Number.NEGATIVE_INFINITY;
    for (let i = 1; i <= countOfEggs; i++) {
        colorOfEggs = args[i];
        if (colorOfEggs === "red") {
            countOfRedEggs++;
            if (maxCount < countOfRedEggs) {
                maxCount = countOfRedEggs;
                maxCollor = colorOfEggs;
            }
        }
        else if (colorOfEggs === "orange") {
            countOfOrangeEggs++;
            if (maxCount < countOfOrangeEggs) {
                maxCount = countOfOrangeEggs;
                maxCollor = colorOfEggs;
            }
        }
        else if (colorOfEggs === "blue") {
            countOfBlueEggs++;
            if (maxCount < countOfBlueEggs) {
                maxCount = countOfBlueEggs;
                maxCollor = colorOfEggs;
            }
        }
        else if (colorOfEggs === "green") {
            countOfGreenEggs++;
            if (maxCount < countOfGreenEggs) {
                maxCount = countOfGreenEggs;
                maxCollor = colorOfEggs;
            }
        }
        
    }

    console.log(`Red eggs: ${countOfRedEggs}`);
    console.log(`Orange eggs: ${countOfOrangeEggs}`);
    console.log(`Blue eggs: ${countOfBlueEggs}`);
    console.log(`Green eggs: ${countOfGreenEggs}`);
    console.log(`Max eggs: ${maxCount} -> ${maxCollor}`);
}
easterEggs(["7",
"orange",
"blue",
"green",
"green",
"blue",
"red",
"green"])

