function firsAndLastKNumbers(array) {
let k = array[0];
let firstK = array.slice(1,k+1);
let lastK = array.slice(-k);
console.log(firstK.join(" "));
console.log(lastK.join(" "));
}
firsAndLastKNumbers([2, 7, 8, 9]);
firsAndLastKNumbers([3,
    6, 7, 8, 9]
   );