function charactersInRange(firstChar, secondChar) {
    let firstNum = firstChar.charCodeAt();
    let secondNum = secondChar.charCodeAt();
    let array = [];
    
    for (let index = Math.min(firstNum,secondNum) + 1; index < Math.max(firstNum,secondNum); index++) {
        const element = String.fromCharCode(index);
        array.push(element);
    }
    console.log(array.join(" "));
}
charactersInRange('a', 'd');
charactersInRange('C', '#');
