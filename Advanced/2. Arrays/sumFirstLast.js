function sumFirstLast(arr) {
    let result = arr.map(Number).pop() + arr.map(Number).shift();
    return result;
}

sumFirstLast(['20', '30', '40'])