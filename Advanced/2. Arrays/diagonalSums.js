function diagonalSums(matrix) {
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        let innerarr = matrix[i];
        for (let j = 0; j < innerarr.length; j++) {
            if (i === j) {
                firstDiagonalSum += matrix[i][j];
            }
        }
    }
    let reversedMatrix = matrix.reverse();
    for (let i = 0; i < reversedMatrix.length; i++) {
        let innerarr = reversedMatrix[i];
        for (let j = 0; j < innerarr.length; j++) {
            if (i === j) {
                secondDiagonalSum += reversedMatrix[i][j];
            }
        }
    }
    console.log(firstDiagonalSum, secondDiagonalSum);
}

diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
)