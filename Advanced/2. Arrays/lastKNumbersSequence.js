function lastKNumbersSequence(n,k) {
    let arr = [1];
    for (let i = 1; i < n; i++) {
        let startInd = Math.max(0,i-k);
        const element = arr.slice(startInd,i+1).reduce((a,v)=>a+v,0);
        arr.push(element);
    }
    return arr;
}

lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);