function bunnyKill(array) {
    let bombs = [];
    let bunnies = [];
    let counter = 0;
    let damage = 0;
    for (let row = 0; row < array.length; row++) {
        if (row === array.length - 1) {
            bombs.push(array[row].split(" "));
        } else {
            bunnies.push(array[row].split(" "));
        }
    }
    for (let i = 0; i < bombs[0].length; i++) {
        let bomb = bombs[0][i].split(",");
        let bombRow = Number(bomb[0]);
        let bombCol = Number(bomb[1]);
        let bobmValue = Number(bunnies[bombRow][bombCol]);
        if (bobmValue === 0) {
            continue;
        }
        damage += bobmValue;
        counter++;

        for (let row = bombRow - 1; row <= bombRow + 1; row++) {
            for (let col = bombCol - 1; col <= bombCol + 1; col++) {
                if (row < 0 || col < 0 || row >= bunnies.length || col >= bunnies[row].length) {
                    continue;
                } else {
                    bunnies[row][col] -= bobmValue;
                    if (bunnies[row][col] < 0) {
                        bunnies[row][col] = 0;
                    }
                }
            }
        }
    }

    for (let row = 0; row < bunnies.length; row++) {
        for (let col = 0; col < bunnies[row].length; col++) {
            let bunny = Number(bunnies[row][col]);
            if (bunny !== 0) {
                counter++;
                damage += bunny;
            }

        }
    }
    console.log(damage);
    console.log(counter);
}
bunnyKill(['5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1']
)

// bunnyKill(['10 10 10',
//     '10 10 10',
//     '10 10 10',
//     '0,0']
// )