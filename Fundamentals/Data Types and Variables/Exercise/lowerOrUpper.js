function lowerOrUpper(char) {
    if(char.charCodeAt()>=65 && char.charCodeAt()<=90) {
        result = "upper-case";
    } else {
        result = "lower-case";
    }
    console.log(result);
}
lowerOrUpper("l");