function biggestElement(matrix) {
    let maxNumsArr = [];
    for (const arr of matrix) {
        maxNumsArr.push(Math.max(...arr));
    }
    let result = Math.max(...maxNumsArr);
   return result;

}

biggestElement([[22220, 50, 10],
[8, 33, 145],
[8, 33, 43242145]]
);