function houseParty(array) {
    let list = [];
    for (let i = 0; i < array.length; i++) {
        const text = array[i].split(" ");
        let name = text[0];
        if (text.includes("not")) {
            if (list.includes(name)) {
                for (let k = 0; k < list.length; k++) {
                    if (name === list[k]) {
                        list.splice(k, 1);
                    }
                }
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (list.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                list.push(name);
            }
        }
    }
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);
console.log("--------");
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'])