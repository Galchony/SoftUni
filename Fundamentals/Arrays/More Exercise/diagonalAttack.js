function diagonalAttack(array) {
    let newArr = [];
    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;
    let num = Number;
    for (let i = 0; i < array.length; i++) {
        newArr.push((array[i]).split(" "));
        sumFirstDiagonal += Number(newArr[i][i]);
        sumSecondDiagonal += Number(newArr[i][array.length - 1 - i]);
    }
    if (sumFirstDiagonal === sumSecondDiagonal) {
        for (let i = 0; i < newArr.length; i++) {
            let result = [];
            for (let j = 0; j < newArr.length; j++) {
                if (i == j || (i + j) == array.length - 1) {
                    num = Number(newArr[i][j]);
                }
                else {
                    num = sumFirstDiagonal;
                }
                result.push(num);
            }
            console.log(result.join(" "));
        }
    }
    else {
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    }
}
diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0']
)