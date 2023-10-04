function arrow(args) {
    let n = Number(args[0]);
    let sharp = "#";
    let point = ".";

    console.log(point.repeat(Math.floor(n / 2)) + sharp.repeat(n) + point.repeat(Math.floor(n / 2)));
    for (let row = 0; row < n - 2; row++) {
        console.log(point.repeat(Math.floor(n / 2)) + sharp + point.repeat(n - 2) + sharp + point.repeat(Math.floor(n / 2)));
    }
    console.log(sharp.repeat((n+1)/2)+point.repeat(n-2)+sharp.repeat((n+1)/2));
    for (let i = 0; i < n-2; i++) {
       console.log(point.repeat(i+1)+sharp+point.repeat(2*n-3-2*(i+1))+sharp+point.repeat(i+1));
    }
    console.log(point.repeat((2*n-2)/2)+sharp+point.repeat((2*n-2)/2));
}
arrow(["9"])