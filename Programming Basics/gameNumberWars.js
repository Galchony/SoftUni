function gameNumberWars(args) {
    let firstGamerName = args[0];
    let secondGamerName = args[1];
    let index = 2;
    let command = args[index];
    let firstGamersPoints = 0;
    let secondGamersPoints = 0;
    let nameOfWinner = "";
    let totalPoints = 0;
    while (command !== "End of game") {
        let firstGamersCard = Number(args[index]);
        index++
        let secondGamersCard = Number(args[index]);
        if (firstGamersCard > secondGamersCard) {
            firstGamersPoints += (firstGamersCard - secondGamersCard);
        }
        else if (firstGamersCard < secondGamersCard) {
            secondGamersPoints += (secondGamersCard - firstGamersCard);
        }
        else if (firstGamersCard === secondGamersCard) {
            firstGamersCard = Number(args[++index]);
            secondGamersCard = Number(args[++index]);
            if (firstGamersCard > secondGamersCard) {
                //firstGamersPoints += (firstGamersCard - secondGamersCard);
                nameOfWinner = firstGamerName;
                totalPoints = firstGamersPoints;
            }
            else {
                //secondGamersPoints += (secondGamersCard - firstGamersCard);
                nameOfWinner = secondGamerName;
                totalPoints = secondGamersPoints;
            }
            console.log(`Number wars!`);
            console.log(`${nameOfWinner} is winner with ${totalPoints} points`);
            break;
        }

        index++;
        command = args[index];
    }
    if (command === "End of game") {
        console.log(`${firstGamerName} has ${firstGamersPoints} points`);
        console.log(`${secondGamerName} has ${secondGamersPoints} points`);
    }
}

gameNumberWars(["Aleks",
"Georgi",
"4",
"5",
"3",
"2",
"4",
"3",
"4",
"4",
"5",
"2"])


