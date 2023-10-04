function sunglasses(args) {
    let n = Number(args[0]);
    let star="*";
    let line = " ";
    console.log(star.repeat(n*2) + line.repeat(n) + star.repeat(n*2));
    for (let row = 1 ; row<=n-2; row++){
        if (Math.ceil(n/2-1) === row) {
        console.log(star + "/".repeat(2*n-2) + star + "|".repeat(n) + star + "/".repeat(2*n-2) + star);
    }
    else {
        console.log(star + "/".repeat(2*n-2) + star + line.repeat(n) + star + "/".repeat(2*n-2) + star);
    }
    }
    console.log(star.repeat(n*2) + line.repeat(n) + star.repeat(n*2));
}
sunglasses(["4"]);