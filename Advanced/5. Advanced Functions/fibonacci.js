function getFibonator() {
    let arr = [];
    let num = 0;
    return function solve() {
        num == 0 ? num = 1 : num = arr.slice(-2).reduce((a, v) => a + v, 0);
        arr.push(num);
        return num;
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13