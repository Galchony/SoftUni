function dungeonestDark(arr) {
    let health = 100;
    let text = arr.join(" ");
    let num = "";
    let action = "";
    let command = "";
    let room = 0;
    let coins = 0;
    for (let index = 0; index < text.length; index++) {
        while (text[index] !== " ") {
            action += text[index];
            index++;
        }
        command = action;
        action = "";
        index++;
        while (text[index] !== " ") {
            if (index>=text.length) {
                break;
            }
            if (text[index] !== "|") {
                num += text[index];
            }
            else {
                break;
            }
            index++;
        }
        number = Number(num);
        room++;
        if (command === "potion") {
            if (health + number > 100) {
                number = 100 - health;
                health = 100;

            } else {
            health += number;
            }
            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command === "chest") {
            coins += number;
            console.log(`You found ${number} coins.`);
        } else {
            health -= number;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            }
            else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${room}`);
                break;
            }
        }
        num = "";
    }
    if (health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }

}
//dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);