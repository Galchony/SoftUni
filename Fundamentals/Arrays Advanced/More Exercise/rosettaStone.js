function rosettaStone(array) {
    let n = Number(array[0]);
    let templateMatrix = [];
    let message = [];
    let trueNum = Number;
    for (let index = 1; index < 1 + n; index++) {
        let element = array[index].split(" ");
        templateMatrix.push(element);
    }
    for (let index = n + 1; index < array.length; index++) {
        let element = array[index].split(" ");
        message.push(element);
    }
    for (let x = 0; x < message.length; x += n) {
        for (let y = 0; y < message[x].length; y += templateMatrix[0].length) {
            for (let row = 0; row < templateMatrix.length; row++) {
                for (let col = 0; col < templateMatrix[row].length; col++) {
                    if (x + row > message.length - 1 || y + col > message[x].length - 1) {
                        break;
                    }
                    let num = Number(message[x + row][y + col]) + Number(templateMatrix[row][col]);
                    if (num > 26) {
                        trueNum = num % 27;
                    } else if (num < 0) {
                        trueNum = 27 + num;
                    } else {
                        trueNum = num;
                    }
                    if (trueNum === 0) {
                        message[x + row][y + col] = " ";
                    } else {
                        message[x + row][y + col] = String.fromCharCode(64 + trueNum);
                    }
                }
            }
        }
    }
    let text = "";
    for (let index = 0; index < message.length; index++) {
        for (let indee = 0; indee < message[index].length; indee++) {
            const element = message[index][indee];
            text += element;
        }

    }
    console.log(text);
}

// rosettaStone(['2',
//     '59 36',
//     '82 52',
//     '4 18 25 19 8',
//     '4 2 8 2 18',
//     '23 14 22 0 22',
//     '2 17 13 19 20',
//     '0 9 0 22 22']
// )
rosettaStone(['3',
    '0 0 0 0',
    '1 0 0 0',
    '1 0 0 0',
    '-1 1 1 1 2 1',
    '1 1 1 1 2 1',
    '1 1 1 1 2 1',
    '1 1 1 1 2 1',
    '1 1 1 1 2 1']
)