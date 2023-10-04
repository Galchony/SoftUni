function evenOrOdd(args) {
    let num = parseInt(args[0]);
    if (num % 2 == 0) {
        console.log("even");
    }
    else {
        console.log("odd");
    }
}
evenOrOdd(["2"]);