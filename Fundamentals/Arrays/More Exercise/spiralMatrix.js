function spiralMatrix(firstNum, secondNum) {
    let arr = [];
    let array = [];
    let num = 1;
    let rowEnd = firstNum - 1;
    let colEnd = secondNum - 1;
    for (let row = 0; row < firstNum; row++) {
        arr = [];
        for (let col = 0; col < secondNum; col++) {
            arr.push(num);
            num++;
        }
        array.push(arr);
    }
    num = 1 + firstNum;
    for (let i = 0; i < Math.floor(firstNum / 2); i++) {
        for (let row = 1+i; row < firstNum-i; row++) {
            array[row][colEnd-i] = num;
            num++;
        }
        for (let col = colEnd-1-i; col >= 0+i; col--) {
            array[rowEnd-i][col] = num;
            num++;
        }
        for (let row = firstNum - 2-i; row > 0+i; row--) {
            array[row][i] = num;
            num++;
        }
        for (let col = 1+i; col < firstNum - 1-i; col++) {
            array[1+i][col] = num;
            num++;
        }
    }

    for (let i = 0; i < firstNum; i++) {
        console.log(array[i].join(" "));

    }
}
spiralMatrix(9, 9);