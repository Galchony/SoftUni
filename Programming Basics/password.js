function password(args) {
    let name = args[0];
    let pass = args[1];
    let index = 2;
    let word = args[index];
    while (word!== pass) {
        index++;
        word = args[index];
    }
    console.log(`Welcome ${name}!`);
}
password(["Gosho",
"secret",
"secret"])

