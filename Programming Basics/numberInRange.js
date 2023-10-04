function numberInRange(args) {
    let num = 0;
    for(let i=0; i<=Number.POSITIVE_INFINITY; i++)  {
        num = Number(args[i]);
        if (num>=1 && num<=100){
            console.log(`The number is: ${num}`);
            break;
        } 
        else {
            console.log(`Invalid number!`);
        }
    }
}
numberInRange(["1000", "200","3"]);