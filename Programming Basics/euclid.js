function euclid (args) {
    let a = Number(args[0]);
    let b = Number(args[1]);
    while (b!=0){
        let oldB = b;
        b = a % b;
        a=oldB;
    }
    console.log(`GCD = ${a}`);

}
euclid (["24", "16"]);