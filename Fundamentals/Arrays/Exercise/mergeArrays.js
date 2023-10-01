function mergeArrays(firstArr, secondArr) {
    let thirdArr = [];
    let num;
    for (let index = 0; index < firstArr.length; index++) {
        let elOfFirstArr = (firstArr[index]);
        let elOfSecondArr = (secondArr[index]);
        // if (index == 0) {
        //     num = elOfFirstArr + elOfSecondArr;
        // }
        if (index % 2 === 0) {
            num = Number(elOfFirstArr) + Number(elOfSecondArr);
  
        }
        else {
            num = elOfFirstArr+elOfSecondArr;
        }
        thirdArr[index] = num;
    }

    console.log(thirdArr.join(" - "));
}
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
// mergeArrays(['13', '12312', '5', '77', '4'],
// ['22', '333', '5', '122', '44']
// );
mergeArrays([1,'-one'], [15,'2']);