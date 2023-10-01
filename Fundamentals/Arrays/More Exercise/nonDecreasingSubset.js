function nonDecreasingSubset(array) {
    let newArray = [];
    let num = Number.NEGATIVE_INFINITY;
        for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];
        if (currentNum >= num) {
            num = currentNum;
            newArray.push(num);
        }
    }
    console.log(newArray.join(" "));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([ 1, 2, 3, 4]);
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);