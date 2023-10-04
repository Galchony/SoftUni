function sumNumbers(args) {
    let n = Number(args[0]);
    let index = 1;
    let num = Number(args[index]);
    let sum = num; 
    while (sum < n) {
        index++;
        num = Number(args[index]);
        sum += num;
    }
    console.log(sum);
}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])


