function reverseString(params) {
    let word = String(params);
    let reversedWord = "";
    for (let i = 0; i < word.length; i++) {
        reversedWord += word[word.length - 1 - i];
    }
    console.log(reversedWord);
}
reverseString("Hello");