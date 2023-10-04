function enterEveNumber(args) {
    let i = 0
    let n = Number(args[i]);
    while (n % 2 !== 0) {
        console.log("The number is not even.");
        i++;
        n = Number(args[i]);
    }
    console.log("Even number entered: " + n);
}
//for (let i = 0; i < Infinity; i++) {
//         let n = Number(args[i]);
//         if (n % 2 == 0) {
//             console.log("Even number entered: " + n);
//             break;
//         }
//         else {
//             console.log("The number is not even.")
//         }
//     }
// }
enterEveNumber(["1", "21", "107", "2039", "108", "6", "3"]);