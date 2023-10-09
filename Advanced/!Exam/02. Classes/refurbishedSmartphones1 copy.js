class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone(model, storage, price, condition) {
        if (model === "" || storage < 0 || price < 0 || condition == "") {
            throw new Error('Invalid smartphone!');
        }
        this.availableSmartphones.push({ model, storage, price, condition });
        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
    }

    sellSmartphone(model, desiredStorage) {
        let phoneToSell = this.availableSmartphones.find(x => x.model === model);
        let soldPrice = 0;
        if (phoneToSell === undefined) {
            throw new Error(`${model} was not found!`);
        }
        if (phoneToSell.storage >= desiredStorage) {
            soldPrice = phoneToSell.price;
        } else if (desiredStorage - phoneToSell.storage <= 128) {
            soldPrice = phoneToSell.price * 0.9;
        } else {
            soldPrice = phoneToSell.price * 0.8;
        }
        this.availableSmartphones = this.availableSmartphones.filter(x => x !== phoneToSell);
        this.soldSmartphones.push({ model, storage: phoneToSell.storage, soldPrice });
        this.revenue += soldPrice;
        return `${model} was sold for ${soldPrice.toFixed(2)}$`
    }

    upgradePhones() {
        if (this.availableSmartphones.length === 0) {
            throw new Error(`There are no available smartphones!`)
        }
        this.availableSmartphones = this.availableSmartphones.map(x => {
            x.storage *= 2;
            return x;
        })
        let output = [`Upgraded Smartphones:`];
        output.push(this.availableSmartphones.map(x => `${x.model} / ${x.storage} GB / ${x.condition} condition / ${x.price.toFixed(2)}$`).join('\n'));
        return output.join('\n');
    }
    salesJournal(criteria) {
        switch (criteria) {
            case 'storage': this.soldSmartphones.sort((a, b) => b.storage - a.storage); break;
            case 'model': this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model)); break;
            default: throw new Error(`Invalid criteria!`);
        }
        let output = [`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`]
        output.push(`${this.soldSmartphones.length} smartphones sold:`)
        output.push(this.soldSmartphones.map(x => `${x.model} / ${x.storage} GB / ${x.soldPrice.toFixed(2)}$`).join('\n'))
        return output.join('\n');
    }
    
}

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
// console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
// console.log(retailer.addSmartphone('', 512, 1900, 'good'));

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
// console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
// console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.upgradePhones());

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Aiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Aiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('storage'));
console.log(retailer.upgradePhones());



