function printEveryNthElementFromAnArray(arr, n) {
    let output = [];
    for (let i = 0; i < arr.length; i += n) {
        output.push(arr[i]);
    }

    return output;
}

console.log(printEveryNthElementFromAnArray(['1',
'2',
'3',
'4',
'5'],
6

))