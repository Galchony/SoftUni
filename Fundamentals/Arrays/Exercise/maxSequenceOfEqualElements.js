function maxSequenceOfEqualElements(array) {
    let number;
    let counter = 0;
    let maxCount = 0;
    let NewArr = [];
    let leftNumber;
    let result = [];
    for (let i = 0; i < array.length; i++) {
        number = array[i];
        if (number === leftNumber) {
            counter++;
            if (counter === 1) {
                NewArr.push(leftNumber);
            }
            NewArr.push(number);
            if (counter > maxCount) {
                maxCount = counter;
                result = NewArr;
            }
        } else {
            counter = 0;
            NewArr = [];
        }
        leftNumber = number;
    }
    console.log(result.join(" "));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
