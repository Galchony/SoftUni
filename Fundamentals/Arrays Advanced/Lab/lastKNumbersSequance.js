function lastKNumbersSequance(n, k) {
    let array = [];
    array[0] = 1;
    for (let i = 1; i < n; i++) {
        let currentNum = 0;
        for (let j = i-1; j >= Math.max(i - k , 0); j--) {
            currentNum += array[j];
        }
        array.push(currentNum);
    }
    console.log(array.join(" "));
}
lastKNumbersSequance(6, 3);