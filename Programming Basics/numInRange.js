function numInRange(args) {
    let i = 0;
    let n = Number(args[i]);
    while (n < 1 || n > 100) {
        i++;
        console.log ("Invalid number!");
        n = Number(args[i]);
      
    }
    console.log(`The number is ${n}`);
}
numInRange(['108','0', '1', '0']);