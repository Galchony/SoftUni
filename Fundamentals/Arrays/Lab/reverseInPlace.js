function reverseInPlace(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
    result += `${arr[arr.length - 1 - i]} `;
    }
    console.log(result);
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);