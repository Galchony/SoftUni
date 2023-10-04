function processOddNumbers(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (i % 2 == 1) {
            newArray.unshift(element * 2);
        }

    }
    console.log(newArray.join(" "));
}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);