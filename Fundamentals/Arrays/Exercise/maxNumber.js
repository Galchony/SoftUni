function maxNumber(params) {
    let num;
    let isTrue = false;
    let result = "";
    for (let i = 0; i < params.length; i++) {
        num = params[i];
        if (i == params.length-1) {
            isTrue = true;
        }
        for (let j = i + 1; j < params.length; j++) {
            let currentNum = params[j];
            if (num > currentNum) {
                isTrue = true;
            }
            else { 
                isTrue = false;
                break;
            }
        }
        if (isTrue) {
            result += `${num} `;
        }
    }
    console.log(result);
}
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);