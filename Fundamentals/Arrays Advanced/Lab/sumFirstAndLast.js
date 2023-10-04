function sumFirstAndLast(array) {
    let firstEl = Number(array[0]);
    let lastEl = Number(array[array.length - 1]);
    let result = firstEl + lastEl;
    console.log(result);
}
sumFirstAndLast(['20', '30', '40']);