function numbersFromOneToNWithStep(args) {
    let n = Number(args[0]);
    for (let i=1; i<=n; i+=3) {
        console.log(i);
    }
}
numbersFromOneToNWithStep(["7"]);