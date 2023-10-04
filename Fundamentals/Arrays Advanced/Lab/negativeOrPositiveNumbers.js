function negativeOrPositiveNumbers(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let num = Number(array[i]);
        if (num < 0) {
            newArray.unshift(array[i]);
        } else {
            newArray.push(array[i]);
        }
    }
    // console.log(newArray.join('/n'));
    for (const el of newArray) {
        console.log(el);
    }
}
negativeOrPositiveNumbers(['7', '-2', '8', '9']);
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);