function wordsUppercase(text) {
    let pattern = /\w+/g;
    let matchesArr = text.match(pattern);
    console.log(matchesArr.map(x => x.toUpperCase()).join(", "));
}
wordsUppercase('Hi, how are you?')