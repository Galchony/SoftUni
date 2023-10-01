function storeProvision(currentStock, orderedProducts) {
    let obj = {};
    for (let i = 0; i < currentStock.length; i += 2) {
        let name = currentStock[i];
        let quantity = Number(currentStock[i + 1]);
        obj[name] = quantity;

    }
    for (let i = 0; i < orderedProducts.length; i += 2) {
        let name = orderedProducts[i];
        let quantity = Number(orderedProducts[i + 1])
        if (obj.hasOwnProperty(name)) {
            obj[name] += quantity;
        } else {
            obj[name] = quantity;
        }
    }
    for (const key of Object.keys(obj)) {
        console.log(`${key} -> ${obj[key]}`);
    }

}


storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)