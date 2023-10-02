function sumDigit(num) {
    let text = num.toString();
    let sum = 0;
    for (let i =0; i < text.length; i++) {
        sum += Number(text[i]);
    }
    console.log(sum);
}
sumDigit(245678);