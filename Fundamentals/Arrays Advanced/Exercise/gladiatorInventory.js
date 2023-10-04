function gladiatorInventory(array) {
    let inventory = array[0].split(" ");
    for (let index = 1; index < array.length; index++) {
        const command = array[index].split(" ");
        let action = command[0];
        let equipment = command[1];
        if (action === "Buy") {
            if (!inventory.includes(equipment)) {
                inventory.push(equipment);
            }
        } else if (action === "Trash") {
            if (inventory.includes(equipment)) {
                let position = inventory.indexOf(equipment);
                inventory.splice(position, 1);
            }
        } else if (action === "Repair") {
            if (inventory.includes(equipment)) {
                let position = inventory.indexOf(equipment);
                let repair = inventory.splice(position, 1);
                inventory.push(repair.join(""));
            }
        } else if (action === "Upgrade") {
            let position = equipment.indexOf("-");
            let upgrade = "";
            for (let j = 0; j < position; j++) {

                upgrade += equipment[j];
            }
            // let upgrade = equipment.splice(position, equipment.length - position);
            if (inventory.includes(upgrade)) {
                let position = inventory.indexOf(upgrade);
                let newEquipment = equipment.replace("-", ":")
                let repair = inventory.splice(position + 1, 0, newEquipment);

            }
        }
    }
    console.log(inventory.join(" "));
}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);
    
gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']
)
