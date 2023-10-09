function lowestPricesInCities(input) {
    let obj = {};
    for (const row of input) {
        [townName, productName, productPrice] = row.split(' | ');
        if (obj.hasOwnProperty(productName)) {
            if (obj[productName].price > productPrice) {
                obj[productName].price = productPrice;
                obj[productName].town = townName;
            }
        } else {
            obj[productName] = { price: Number(productPrice), town: townName };
        }
    }
    for (const key in obj) {
        console.log(`${key} -> ${obj[key].price} (${obj[key].town})`);
    }
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 5',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)