function readText(args) {
    let i = 0;
    let word = args[i];
    while (word !== "Stop") {
        console.log(word);
        i++;
        word = args[i];

    }


}
readText(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"])
