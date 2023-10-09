function ticTacToe2(arr) {
    let dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let counter = 0;
    let firstPlayerSign = 'X';
    let secondPlayerSign = 'O';
    let winner = '';

    while (arr.length >= 0) {
        if (endGame(dashboard)) {
            console.log('The game ended! Nobody wins :(');
            for (const row of dashboard) {
                console.log(row.join('\t'));
            }
            return;
        }
        let [x, y] = arr.shift().split(' ');
        if (dashboard[x][y] !== false) {
            console.log(`This place is already taken. Please choose another!`);
            continue;
        }
        if (counter % 2 === 0) {
            dashboard[x][y] = firstPlayerSign;
            counter++;


        } else {
            dashboard[x][y] = secondPlayerSign;
            counter++;

        }
        if (isThereWin(dashboard,firstPlayerSign,secondPlayerSign)) {
            console.log(`Player ${winner} wins!`);
            for (const row of dashboard) {
                console.log(row.join('\t'));
            }
            return;
        }

    }

    if (endGame(dashboard)) {
        console.log('The game ended! Nobody wins :(');
        for (const row of dashboard) {
            console.log(row.join('\t'));
        }
        return;
    }


    function isThereWin(dashboard, firstPlayerSign, secondPlayerSign) {
        let colArr = [];
        let diagonalArr = [];
        let seconddiagonalArr = [];
        let copyDashboard = dashboard.slice().reverse();
        for (let i = 0; i < dashboard.length; i++) {
            colArr = [];
            if (dashboard[i].every(x => x === firstPlayerSign)) {
                winner = firstPlayerSign;
                return true;
            } else if (dashboard[i].every(x => x === secondPlayerSign)) {
                winner = secondPlayerSign;
                return true;
            }
            for (let j = 0; j < dashboard.length; j++) {
                colArr.push(dashboard[j][i]);
                if (i === j) {
                    diagonalArr.push(dashboard[i][j]);
                    seconddiagonalArr.push(copyDashboard[i][j]);
                }
            }
            if ((colArr.every(x => x === firstPlayerSign))) {
                winner = firstPlayerSign;
                return true;
            } else if (colArr.every(x => x === secondPlayerSign)) {
                winner = secondPlayerSign;
                return true;
            }
        }
        if ((diagonalArr.every(x => x === firstPlayerSign)) || (seconddiagonalArr.every(x => x === firstPlayerSign))) {
            winner = firstPlayerSign;
            return true;
        } else if ((diagonalArr.every(x => x === secondPlayerSign)) || (seconddiagonalArr.every(x => x === secondPlayerSign))) {
            winner = secondPlayerSign;
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

ticTacToe2(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]



)