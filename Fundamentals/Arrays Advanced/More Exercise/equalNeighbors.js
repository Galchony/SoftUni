function equalNeighbors(array) {
    let counter = 0;

    for (let row = 0; row < array.length; row++) {
        for (let col = 0; col < array[row].length; col++) {
            let sym = array[row][col];
            if (row === array.length - 1 && col !== array[row].length - 1) {
                if (sym === array[row][col + 1]) {
                    counter++;
                }
            } else if (col === array[row].length - 1 && row !== array.length - 1) {
                if (sym === array[row + 1][col]) {
                    counter++;
                }
            } else if (row !== array.length - 1 && col !== array[row].length - 1) {
                if (sym === array[row + 1][col])  {
                    counter++;
                }
                if (sym === array[row][col + 1]) {
                    counter++;
                }
            
            }
        }
    }

    // console.log(counter);
    return counter;
}
equalNeighbors([['test', 'yo', 'yo', 'jk'],
['well', 'yo', 'no', '6'],
['not', 'done', 'yet', '5']]
)