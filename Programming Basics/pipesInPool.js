function pipesInPool(args) {
    let v = parseInt(args[0]);
    let p1 = parseInt(args[1]);
    let p2 = parseInt(args[2]);
    let h = parseFloat(args[3]);
    let filledPool = ((p1+p2) * h) ;
    let x = (filledPool / v)*100 ;
    let y = ((p1*h)/filledPool)*100;
    let z = ((p2*h)/filledPool)*100;
    if (v >= filledPool) {
        console.log(`The pool is ${Math.trunc(x)}% full. Pipe 1: ${Math.trunc(y)}%. Pipe 2: ${Math.trunc(z)}%.`);
    }
    else {
        console.log(`For ${h} hours the pool overflows with ${(filledPool-v)} liters.`);
    }

}
pipesInPool(["1000","1", "2", "0.5"]);