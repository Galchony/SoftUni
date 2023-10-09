function processOddPositions(arr) {

    // let result = arr.filter((x, i) => {
    //     if (i % 2 !== 0) {
    //         if (x === 0) {
    //             return true;
    //         }
    //         return x;
    //     }
    // }).map(x => x * 2).reverse().join(' ');
    let result = arr.filter((x, i) => i % 2 !== 0)
    .map(x=>x*2)
    .reverse()
    .join(' ');
    return result;

}

// console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));