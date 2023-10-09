function ticTacToe(arr) {
    let dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]];
    let length = arr.length;
    let counter = 0;
    let sign = '';
    for (let index = 0; index < length; index++) {
        if (endGame(dashboard)) {
            console.log(`The game ended! Nobody wins :(`);
            for (const row of dashboard) {
                console.log(row.join('\t'));
            }
            return;
        }
        if (counter % 2 === 0) {
            let firstPlayerMove = arr.shift().split(' ');
            if (dashboard[firstPlayerMove[0]][firstPlayerMove[1]] === false) {
                dashboard[firstPlayerMove[0]][firstPlayerMove[1]] = 'X';
            } else {
                while (dashboard[firstPlayerMove[0]][firstPlayerMove[1]] !== false) {
                    firstPlayerMove = arr.shift().split(' ');
                    index++;
                    console.log(`This place is already taken. Please choose another!`);

                }
                dashboard[firstPlayerMove[0]][firstPlayerMove[1]] = 'X';
            }
            sign = 'X';
            if (win(dashboard, sign)) {
                console.log(`Player ${sign} wins!`);
                for (const row of dashboard) {
                    console.log(row.join('\t'));
                }
                return;
            }
        } else {
            let secondPlayerMove = arr.shift().split(' ');
            if (dashboard[secondPlayerMove[0]][secondPlayerMove[1]] === false) {
                dashboard[secondPlayerMove[0]][secondPlayerMove[1]] = 'O';
            } else {
                while (dashboard[secondPlayerMove[0]][secondPlayerMove[1]] !== false) {
                    secondPlayerMove = arr.shift().split(' ');
                    index++;
                    console.log(`This place is already taken. Please choose another!`);
                }
                dashboard[secondPlayerMove[0]][secondPlayerMove[1]] = 'O';
            }
            sign = 'O';
            if (win(dashboard, sign)) {
                console.log(`Player ${sign} wins!`);
                for (const row of dashboard) {
                    console.log(row.join('\t'));
                }
                return;
            };
        }
        counter++;

    }

    function win(dashboard, sign) {
        let colArr = [];
        let diagonalArr = [];
        let seconddiagonalArr = [];
        let copyDashboard = dashboard.slice().reverse();
        for (let i = 0; i < dashboard.length; i++) {
            if (dashboard[i].every(x => x === sign)) {
                return true;
            }
            for (let j = 0; j < dashboard.length; j++) {
                colArr.push(dashboard[j][i]);
                if (i === j) {
                    diagonalArr.push(dashboard[i][j]);
                    seconddiagonalArr.push(copyDashboard[i][j]);
                }
            }
        }
        if (colArr.every(x => x === sign)) {
            return true;
        }
        if (diagonalArr.every(x => x === sign)) {
            return true;
        }
        if (seconddiagonalArr.every(x => x === sign)) {
            return true;
        }
        return false;
    }

    function endGame(dashboard) {
        for (let i = 0; i < dashboard.length; i++) {
            for (let j = 0; j < dashboard.length; j++) {
                if (dashboard[i][j] === false) {
                    return false;
                }
            }
        }
        return true;
    }

}
ticTacToe(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]


)