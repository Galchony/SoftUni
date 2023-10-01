// function printNthElement(array) {
//     let result = `${array[0]} `;
//     let step = Number(array[array.length - 1]);
//     let num = 0;
//     for (let i = 1; i < array.length - 1; i++) {
//         num = array[i];
//         if (i % step === 0) {
//             result += `${num} `;
//         }
//     }
//     console.log(result);
// }

function printNthElement(array) {
    let step = Number(array.pop());
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        i % step === 0 ? (newArr.push(array[i])) : false;
    }
       console.log(newArr.join(" "));
}

printNthElement(['5', '20', '31', '4', '20', '2']);
printNthElement(['1', "1"]);