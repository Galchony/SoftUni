function exetractIncreasingSubsequenceFromArray(arr) {
    // let currentBiggestNum = arr[0];
    // let result = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (currentBiggestNum <= arr[i]) {
    //         result.push(arr[i]);
    //         currentBiggestNum = arr[i];
    //     }
    // }
    // return result;
    let currentBiggestNum = arr[0];
    return arr.reduce((a, v) => {
        if (v >= currentBiggestNum) {
            a.push(v);
            currentBiggestNum = v;
        }
        return a;
    }, []);

}

console.log(exetractIncreasingSubsequenceFromArray([1,
    3,
    8,
    4, 10, 12, 3, 2, 24])
)