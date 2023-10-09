function heroicInventory(input) {
    let register = [];
    for (const heroInfo of input) {
        let [heroName, heroLevel, items] = heroInfo.split(' / ');
        items = items ? items.split(', ') : [];
        let hero = {
            name: heroName,
            level: Number(heroLevel),
            items
        }
        register.push(hero);
    }

    let output = JSON.stringify(register);
    // console.log(output);
    return output;
}

heroicInventory(['Isacc / 25 / ',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)