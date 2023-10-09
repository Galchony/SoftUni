function aggregateElements(arr) {
    function sum(arr) {
        return arr.reduce((a, v) => a + v, 0);
    }
    function sumInverse(arr) {
        return arr.reduce((a, v) => a + 1 / v, 0);

    }
    function concat(arr) {
        return arr.join("")
    }
    console.log(sum(arr));
    console.log(sumInverse(arr));
    console.log(concat(arr));
}
aggregateElements([2, 4, 8, 16] );