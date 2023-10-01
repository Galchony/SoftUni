function thePyramidOfKingDjoser(base, increment) {
    let height = increment;
    let stone = 0;
    let sumOfStones = 0;
    let marble = 0;
    let sumOfMarble = 0;
    let steps = 0;
    let lapisLazuli = 0;
    let sumOflapisLazuli = 0;
    let sumOfGold = 0;
    for (let i = base; i > 0; i -= 2) {
        steps += 1;
        if (i == 1 || i == 2) {
            sumOfGold = i * i * height;
            break;
        }
        if (steps % 5 == 0) {
            stone = (i - 2) * (i - 2) * height;
            lapisLazuli = (i * i * height) - stone;
            sumOfStones += stone;
            sumOflapisLazuli += lapisLazuli;
        }
        else {
            stone = (i - 2) * (i - 2) * height;
            marble = (i * i * height) - stone;
            sumOfStones += stone;
            sumOfMarble += marble;
        }

    }
    console.log(`Stone required: ${Math.ceil(sumOfStones)}`);
    console.log(`Marble required: ${Math.ceil(sumOfMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(sumOflapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(sumOfGold)}`);
    console.log(`Final pyramid height: ${Math.floor(steps*height)}`);
}
// thePyramidOfKingDjoser(11, 1);
// thePyramidOfKingDjoser(11, 0.75);
// thePyramidOfKingDjoser(12, 1);
thePyramidOfKingDjoser(23, 0.5);