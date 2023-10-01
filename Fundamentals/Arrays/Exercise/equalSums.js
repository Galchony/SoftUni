function equalSums(params) {
    let isTrue = false;
    let index;
    for (let i = 0; i < params.length; i++) {
        let sumOfRight = 0;
        let sumOfLeft = 0;
        let arrRigth = params.slice(i + 1);
        let arrLeft = params.slice(0, i);
        // for (let j = 0; j < arrLeft.length; j++) {
        //     let num = arrLeft[j];
        //     sumOfLeft += num;
        // }
        for (const el of arrLeft) {
            sumOfLeft += el;
        }
        // for (let k = 0; k < arrRigth.length; k++) {
        //     let num = arrRigth[k];
        //     sumOfRight += num;
        // }
        for (const el of arrRigth) {
            sumOfRight += el;
        }
        if (sumOfLeft == sumOfRight) {
            index = i;
            isTrue = true;
        }
    }
    // if (params.length === 1) {
    //     console.log("0");
    // }
    if (isTrue) {
        console.log(index);
    }
    else {
        console.log("no");
    }
}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);