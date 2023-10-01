function equalArrays(arr1, arr2) {
    let numArr1;
    let numArr2;
    let sum = 0;
    let isTrue = false;
    for (let i = 0; i < arr1.length; i++) {
        numArr1 = Number(arr1[i]);
        for (let j = i; j <= i; j++) {
            numArr2 = Number(arr2[j]);
            if (numArr1 == numArr2) {
                isTrue = true;
                sum += numArr1;
            }
            else {
                isTrue = false;
                console.log(`Arrays are not identical. Found difference at ${i} index`);
                break;
            }
        }
        if (isTrue == false) {
            break;
        }
    }
    if (isTrue) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
equalArrays(['1'], ['10']);