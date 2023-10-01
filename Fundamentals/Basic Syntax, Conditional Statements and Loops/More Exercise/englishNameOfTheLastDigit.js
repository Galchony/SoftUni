function englishNameOfTheLastDigit(number) {
    let lastDigit = number % 10;
    let nameOfDigit = "";
    switch (lastDigit) {
        case 1: nameOfDigit = "one"; break;
        case 2: nameOfDigit = "two"; break;
        case 3: nameOfDigit = "three"; break;
        case 4: nameOfDigit = "four"; break;
        case 5: nameOfDigit = "five"; break;
        case 6: nameOfDigit = "six"; break;
        case 7: nameOfDigit = "seven"; break;
        case 8: nameOfDigit = "eight"; break;
        case 9: nameOfDigit = "nine"; break;
        default: nameOfDigit = "zero"; break;
        
    }
    console.log(nameOfDigit);
}
englishNameOfTheLastDigit(512);