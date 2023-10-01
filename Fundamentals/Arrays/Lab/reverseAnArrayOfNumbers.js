function reverseAnArrayOfNumbers(number, arr) {
    // let newArr = "";
    // for (let i = 0; i < number; i++) {
    //     newArr += `${arr[number - 1 - i]} `;
    // }
    // console.log(newArr);
    let newArr = [];
    for (let i = 0; i < number; i++) {
        newArr.push(arr[number - 1 - i]);
    }
    console.log(newArr.join(" "));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);