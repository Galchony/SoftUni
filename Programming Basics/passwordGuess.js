function passwordGuess(args) {
    let pass = args[0];

    if (pass == "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    }
    else {
        console.log("Wrong password!");
    }
}
passwordGuess(["qwerty"]);
passwordGuess(["s3cr3t!P@ssw0rd"]);
passwordGuess(["s3cr3t!p@ss"]);
