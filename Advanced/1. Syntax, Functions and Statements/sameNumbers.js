function sameNumbers(num) {
    // let dig = num % 10;
    // let dig2 = Number;
    // let newNum = Math.trunc(num / 10);
    // let sum = dig;
    // while (newNum !== 0) {
    //     dig2 = newNum % 10;
    //     if (dig !== dig2) {
    //         console.log(false);
    //     }
    //     newNum = Math.trunc(newNum / 10);
    // }
    // console.log(true);
    let arr = String(num).split('');
    let sum = arr.reduce((a, v) => a + Number(v), 0);
    let isSameNum = arr.every(x => x === arr[0]);

    // let dig = arr[0];
    // let isSameNum = true;
    // for (const el of arr) {
    //     if (el !== dig) {
    //         isSameNum = false;
    //     }
    // }
    console.log(isSameNum);
    console.log(sum);
}
sameNumbers(123)