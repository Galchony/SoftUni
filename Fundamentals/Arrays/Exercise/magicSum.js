function magicSum(array, number) {

    for (i = 0; i < array.length; i++) {
        let firstNum = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let secondNum = array[j];
            let sum = firstNum + secondNum;
            if (sum === number) {
                console.log(`${firstNum} ${secondNum}`);
            }
        }
    }
}
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);