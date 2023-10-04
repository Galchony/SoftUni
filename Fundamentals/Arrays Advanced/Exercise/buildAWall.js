function buildAWall(array) {
    let priceOfConcrete = 1900;
    let quantityOfConcrete = 195;
    let totalSum = 0;
    let totalCrew = [];
    let result = [];
    for (let index = 0; index < array.length; index++) {
        let height = Number(array[index]);
        let crew = [];
        for (let j = height; j < 30; j++) {
            crew.push(quantityOfConcrete);
            totalSum += (priceOfConcrete * quantityOfConcrete);
        }
        totalCrew.push(crew);
    }
    totalCrew.sort((x, y) => y.length - x.length);
    let maxLength = totalCrew[0].length;
    for (let i = 1; i < totalCrew.length; i++) {
        for (let j = totalCrew[i].length; j < maxLength; j++) {
            totalCrew[i][j] = 0;
        }
    }
    for (let i = 0; i < maxLength; i++) {
        let sumForDay = 0;
        for (let j = 0; j < totalCrew.length; j++) {
            sumForDay += totalCrew[j][i];
        }
        result.push(sumForDay)
    }
    console.log(result.join(", "));
    console.log(`${totalSum} pesos`);
}
// buildAWall([17]);
// buildAWall([21, 25, 28]);
buildAWall([17, 22, 17, 19, 17]);