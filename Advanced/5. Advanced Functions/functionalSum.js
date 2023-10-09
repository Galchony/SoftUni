function add(num) {
    let sum = 0;
    sum += num;

    function solve(anotherNum) {
        sum += anotherNum;
        return solve;
    }
    solve.toString = () => sum;
    return solve;
}


console.log(add(1)(6)(-3).toString());