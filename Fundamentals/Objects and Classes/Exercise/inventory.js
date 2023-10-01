function inventory(array) {
    let inventory = array[0].split(", ");
    for (let index = 1; index < array.length; index++) {
        if (array[index === "Craft!"]) {
            console.log(inventory.join(", "));
            break;
        }
        let command = array[index].split(" - ");
        let action = command[0];
        let item = command[1];
        if (action === "Collect") {
            if (!isThereItem(item, inventory)) {
                inventory.push(item);
            }
        } else if (action === "Drop") {
            if (isThereItem(item, inventory)) {
                let itemIndex = inventory.indexOf(item);
                inventory.splice(itemIndex, 1); 
            }
        } else if (action === "Combine Items") {
            let item = command[1].split(":");
            let oldItem = item[0];
            let newItems = item[1];
            if (isThereItem(oldItem, inventory)) {
                let oldItemIndex = inventory.indexOf(oldItem);
                inventory.splice(oldItemIndex+1, 0,newItems);
            }
        } else if (action === "Renew") {
            if (isThereItem(item, inventory)) {
                let itemIndex = inventory.indexOf(item);
                inventory.splice(itemIndex, 1);
                inventory.push(item);
            }
        }

    }
    console.log(inventory.join(", "));

    function isThereItem(item, array) {
        for (let i = 0; i < array.length; i++) {
            let element = array[i];
            if (element === item) {
                return true;
            }
        }
        return false;
    }
}
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  
)