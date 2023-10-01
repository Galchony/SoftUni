function orbit(array) {
    let h = array[0];
    let w = array[1];
    let num = 0;
    let matrixx = [];
    let x = array[2];
    let y = array[3];
    for (let row = 0; row < w; row++) {
        let newArr = [];
        for (let col = 0; col < h; col++) {
            newArr.push(num);
        }
        matrixx.push(newArr);
    }
    // num = 1;
    // matrixx[x][y] = num;
    for (let row = 0; row < matrixx.length; row++) {
        
        for (let col = 0; col < matrixx.length; col++) {
            num = 1;
           if (row == x && col ==y) {
            num = 1;
           }
           else {
            num += Math.max(Math.abs(row-x),Math.abs(col-y));
           }
            matrixx[row][col] = num;
        }
    }
//     if (x ==h-1 ) {
//         for (let row = 0; row <= x; row++) {
//             for (let col = 0; col <= y; col++) {
//                 matrixx[x - row][y - col] = Math.max(num + col, num + row);
    
//             }
//         }
//     }
//     else {for (let row = 0; row < matrixx.length - x; row++) {
//         for (let col = 0; col < matrixx.length - y; col++) {
//             matrixx[x + row][y + col] = Math.max(num + col, num + row);

//         }
//     }
//     for (let row = 0; row <= x; row++) {
//         for (let col = 0; col <= y; col++) {
//             matrixx[x - row][y - col] = Math.max(num + col, num + row);

//         }
//     }
   
//     for (let row = 0; row < x; row++) {
//         for (let col = 0; col <y; col++) {
//             matrixx[row][col+y+1] = Math.max(y+col ,x-row+num);
//             matrixx[row+y+1][col] = Math.max(x+row ,y-col+num);
//         }
//     }
// }
    // for (let row = 0; row < matrixx.length; row++) {
    //     for (let col = 0; col < matrixx.length; col++) {
    //         if (Math.max(x-row,y-col)>(matrixx.length-1)/2) {
    //             num = num+Math.max(x-row,y-col)
    //         }
    //         else {
    //             num = Math.min(num + col, num + row)
    //         }
    //         matrixx[row][col] = num;
    //     }
    // }

    for (let i = 0; i < matrixx.length; i++) {
        console.log(matrixx[i].join(" "));
    }
}
//  orbit([4, 4, 0, 0]);
// orbit([5, 5, 2, 2]);
// orbit([3, 3, 2, 2]);
orbit([3, 3, 2, 1]);