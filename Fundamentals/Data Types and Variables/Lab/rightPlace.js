function rightPlace(string, char, secondString) {
    let newString = "";
    // for (const el of string) {
    //     if (el == "_") {
    //         newString += char;
    //     }
    //     else {
    //         newString += el;
    //     }
    // }
    newString = string.replace("_", char);
    newString == secondString ? console.log("Matched") : console.log("Not Matched");
    //console.log(newString);
}
rightPlace('Str_ng', 'I', 'Strong');