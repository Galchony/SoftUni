function vowelsSum(args) {
    let word = args[0];
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
        vowels = word[i];
        if (vowels === "a") {
            sum += 1;
        }
        else if (vowels === "e") {
            sum += 2;
        }
        else if (vowels === "i") {
            sum += 3;
        }
        else if (vowels === "o") {
            sum += 4
        }
        else if (vowels === "u") {
            sum += 5;
        }
    }
    console.log(sum);
}
vowelsSum(["bamboo"]);