function airPollution(array, secondArray) {
    let block = Number;
    let result = [];
    let counter = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index].split(" ");
        array.splice(index, 1, element);
    }
    for (let i = 0; i < secondArray.length; i++) {
        let command = secondArray[i].split(" ");
        let forses = command[0];
        let index = Number(command[1]);
        if (forses === "breeze") {
            for (let col = 0; col < array.length; col++) {
                array[index][col] = Number(array[index][col]) - 15;
                if (array[index][col] < 0) {
                    array[index][col] = 0;
                }
            }
        } else if (forses === "gale") {
            for (let row = 0; row < array.length; row++) {
                array[row][index] = Number(array[row][index]) - 20;
                if (array[row][index] < 0) {
                    array[row][index] = 0;
                }
            }
        } else if (forses === "smog") {
            for (let row = 0; row < array.length; row++) {
                for (let col = 0; col < array.length; col++) {
                    array[row][col] = Number(array[row][col]) + Number(index);
                    if (array[row][col] < 0) {
                        array[row][col] = 0;
                    }
                }
            }
        }
    }
    for (let row = 0; row < array.length; row++) {
        for (let col = 0; col < array.length; col++) {
            block = Number(array[row][col]);
            if (block >= 50) {
                result.push(`[${row}-${col}]`);
                counter++;
            }
        }
    }
    if (counter > 0) {
        console.log(`Polluted areas: ${result.join(", ")}`);
    } else{
        console.log(`No polluted areas`);
    }
}

airPollution(['5 7 72 14 4',
    '41 35 37 27 33',
    '23 16 27 42 12',
    '2 20 28 39 14',
    '16 34 31 10 24'],
    ['breeze 1', 'gale 2', 'smog 25']
)
console.log("---------------");
airPollution(['5 7 3 28 32',
'41 12 49 30 33',
'3 16 20 42 12',
'2 20 10 39 14',
'7 34 4 27 24'],
['smog 11', 'gale 3', 'breeze 1', 'smog 2']
)
console.log("---------------");
airPollution(['5 7 2 14 4',
'21 14 2 5 3',
'3 16 7 42 12',
'2 20 8 39 14',
'7 34 1 10 24'],
['breeze 1', 'gale 2', 'smog 35']
);
