function tseamAccount(array) {
    let games = array[0].split(" ");
    let index = 1;
    let command = array[index];
    let expansion = "";
    while (command !== "Play!") {
        let newArr = command.split(" ");
        let action = newArr[0];
        let newGame = newArr[1];
        if (action === "Install") {
            if (games.includes(newGame)) {
                index++;
                command = array[index];
                continue;
            }
            else {
                games.push(newGame);
            }
        } else if (action === "Uninstall") {
            if (games.includes(newGame)) {
                let toCut = games.findIndex((x) => x === newGame);
                games.splice(toCut, 1);
            }
        } else if (action === "Update") {
            if (games.includes(newGame)) {
                let newArr = games.splice(games.findIndex((x) => x === newGame), 1)
                let toCut = newArr.pop();
                games.push(toCut);
            }
        } else if (action === "Expansion") {
            for (let i = 0; i < newGame.length; i++) {
                let char = newGame[i];
                if (char === "-") {
                    let toCut = i;
                    expansion = newGame.slice(toCut + 1);
                    newGame = newGame.slice(0, i);
                }
            }
            if (games.includes(newGame)) {
                let ind = games.findIndex((x) => x === newGame);
                newGame += `:${expansion}`;
                games.splice(ind + 1, 0, newGame);
            }
        }
        index++;
        command = array[index];
    }
    console.log(games.join(" "));
}


//tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
tseamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);