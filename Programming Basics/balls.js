function balls(args) {
    let countOfBalls = Number(args[0]);
    let points = 0;
    let countOfRed = 0;
    let countOfOrange = 0;
    let countOfYellow = 0;
    let countOfWhite = 0;
    let countOfBlack = 0;
    let counter = 0;
    for (let i = 1; i <= countOfBalls; i++) {
        let colorOfBall = args[i];
        if (colorOfBall === "red") {
            points += 5;
            countOfRed++;
        }
        else if (colorOfBall === "orange") {
            points += 10;
            countOfOrange++;
        }
        else if (colorOfBall === "yellow") {
            points += 15;
            countOfYellow++;
        }
        else if (colorOfBall === "white") {
            points += 20;
            countOfWhite++;
        }
        else if (colorOfBall === "black") {
            points = Math.floor(points / 2);
            countOfBlack++;
        }
        else {
            counter++;
        }
    }
    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${countOfRed}`);
    console.log(`Orange balls: ${countOfOrange}`);
    console.log(`Yellow balls: ${countOfYellow}`);
    console.log(`White balls: ${countOfWhite}`);
    console.log(`Other colors picked: ${counter}`);
    console.log(`Divides from black balls: ${countOfBlack}`);
}
balls(["3",
    "white",
    "black",
    "pink"])
