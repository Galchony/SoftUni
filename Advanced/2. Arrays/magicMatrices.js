function magicMatrices(matrix) {
    let sumArr = [];
    let sum = 0;
       for (let i = 0; i < matrix.length; i++) {
        let rowSum = 0;
        let colSum = 0;
        for (let j = 0; j < matrix.length; j++) {
            rowSum += matrix[i][j];
            colSum += matrix[j][i];
            sum = rowSum;
        }
        sumArr.push(rowSum, colSum);
    }
    console.log(sumArr.every(x=>x===sum));
}

magicMatrices([[4, 5, 6],    [6, 5, 4],    [5, 5, 8]]
    
)