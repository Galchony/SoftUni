function lastKNumbersSequence(args) {
    let n = Number(args[0]);
    let k = Number(args[1]);
    let sum = 0;
    let num = 1;
    let num2 = 0;
    let num3 = 0;
    let array = [];
    array.length = n;
         
        for (let j = 1; j <= n ; j++) {
            num[j+1] += num[j] ;
            array.push(num)
        }
              
       
    console.log(array);
}
lastKNumbersSequence([8, 2])