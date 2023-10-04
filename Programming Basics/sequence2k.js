function sequence2k(args) {
    let n = Number(args[0]);
    let num = 1;
    // for (let row = 0; row <= n; row++) {
    //     console.log(num);
    //     num = (num * 2 + 1);
    //     if (num > n) {
    //         break;
    //     }
    // }
    while (num <= n) {
        console.log(num);
        num = (num * 2 + 1);
    }
}
sequence2k(["100"]);