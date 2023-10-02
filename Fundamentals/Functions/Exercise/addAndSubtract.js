function addAndSubtract(params) {
    let newArr = [];
    let index = 0;
    let sumParams = 0;
    let sumNewArr = 0;
    for (const el of params) {
        if (el % 2 != 0) {
            num = el - index;
        }
        else {
            num = el + index;
        }
        sumParams += el;
        sumNewArr += num;
        //newArr[index] = num;
        newArr.push(num);
        index++;
    }
    console.log(newArr);
    console.log(sumParams);
    console.log(sumNewArr);
}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);