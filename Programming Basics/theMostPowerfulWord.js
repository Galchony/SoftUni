function theMostPowerfulWord(args) {
    let word = "";
    let lengthOfWord = 0;
    let sumOfWords = 0;
    let maxSumWord = 0;
    let maxWord = "";
    for (let row = 0; row < Number.POSITIVE_INFINITY; row++) {
        word = args[row];
        lengthOfWord = word.length;
        sumOfWords = 0;
        if (word === "End of words") {
            break;
        }
        else {
            for (let col = 0; col < lengthOfWord; col++) {
                sumOfWords += (word[col].charCodeAt());

            }
            if (word[0] === "a" || word[0] === "e" || word[0] === "i" || word[0] === "o" || word[0] === "u" || word[0] === "y" || word[0] === "A" || word[0] === "E" || word[0] === "I" || word[0] === "O" || word[0] === "U" || word[0] === "Y") {
                sumOfWords *= lengthOfWord;
            }
            else {
                sumOfWords = Math.floor(sumOfWords / lengthOfWord);
            }
            if (maxSumWord < sumOfWords) {
                maxSumWord = sumOfWords;
                maxWord = word;
            }
        }
    }
    console.log(`The most powerful word is ${maxWord} - ${maxSumWord}`);
}
//theMostPowerfulWord(["The", "Most", "Powerful", "Word", "Is", "Experience", "End of words"])
theMostPowerfulWord(["But", "Some", "People", "Say", "It's", "LOVE", "End of words"]);