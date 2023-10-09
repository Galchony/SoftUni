function equalNeighbors(matrix) {
    let counter = 0;
    for (let i = 0; i < matrix.length; i++) {
        const innerArr = matrix[i];
        for (let j = 0; j < innerArr.length; j++) {
            const element = matrix[i][j];
            if (i - 1 >= 0) {
                const elementLeft = matrix[i - 1][j];
                if (element === elementLeft) {
                    counter++;
                }
            }
            if (j - 1 >= 0) {
                const elementUp = matrix[i][j - 1];
                if (element === elementUp) {
                    counter++;
                }
            }
        }
    }
    return counter;
}
console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]

))