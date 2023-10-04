function smallestTwoNumbers(array) {
    let newArray;
    newArray = array.sort((a, b) => a - b);
    let result = `${newArray[0]} ${newArray[1]}`
    console.log(result);
}
smallestTwoNumbers([30, 15, 50, 5]);