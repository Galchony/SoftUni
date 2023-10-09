function sortingNumbers(arr) {
    arr.sort((a, b) => a - b);
    let result = [];
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        result.push(arr.shift());
        arr.reverse();
         }
    return result;
}
    console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))