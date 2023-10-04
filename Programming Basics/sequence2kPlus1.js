function sequence2kPlus1(args) {
    let n = Number(args[0]);
    for (let num = 1; num <= n; num = num*2 + 1) {
        console.log(num);
    }

}
sequence2kPlus1(["31"]);