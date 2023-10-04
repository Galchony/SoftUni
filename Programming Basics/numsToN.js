function numsToN(args) {
    let n = Number(args[0]);
    for (let row = 1; row <= n; row += 3) {
        console.log(row); 
    }
    
}
numsToN(["10"]);