function sorting(array) {
    let newArr = [];
    let length = array.length;
    array.sort((x, y) => x - y);
    for (let i = 0; i < length; i++) {
        if (i % 2 === 0) {
            let element = array.pop();
            newArr.push(element);
        } else {
            let element = array.shift();
            newArr.push(element);
        }
    }
    console.log(newArr.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);