class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone(model, storage, price, condition) {
        if (model === '' || !Number.isInteger(storage) || storage < 0 || price < 0 || condition === '') {
            throw new Error('Invalid smartphone!');
        } else {
            this.availableSmartphones.push({ model, storage: Number(storage), price: Number(price), condition });
            return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
        }
    }

    sellSmartphone(model, desiredStorage) {
        let soldPrice = 0;
        let phoneToSell = this.availableSmartphones.find(x => x.model === model);
        if (phoneToSell === undefined) {
            throw new Error(`${model} was not found!`);
        } else {
            if (phoneToSell.storage >= desiredStorage) {
                soldPrice = phoneToSell.price;
            } else if (Math.abs(desiredStorage - phoneToSell.storage) <= 128) {
                soldPrice = phoneToSell.price * 0.9;
            } else {
                soldPrice = phoneToSell.price * 0.8;
            }
            let storage = phoneToSell.storage;
            this.soldSmartphones.push({ model, storage, soldPrice });
            let index = this.availableSmartphones.indexOf(phoneToSell);
            this.availableSmartphones.splice(index, 1);
            this.revenue += soldPrice;
            return `${model} was sold for ${soldPrice.toFixed(2)}$`;
        }
    }

    upgradePhones() {
        if (this.availableSmartphones.length === 0) {
            throw new Error('There are no available smartphones!');
        } else {
            this.availableSmartphones = this.availableSmartphones.map(x => {
                x.storage *= 2;
                x.soldPrice = x.soldPrice.toFixed(2)
                return x;
            });
            let output = `Upgraded Smartphones:\n`
            output += `${this.availableSmartphones.map(x => `${x.model} / ${x.storage} GB / ${x.condition} condition / ${x.price.toFixed(2)}$`).join('\n')}`;

            return output;
        }
    }

    salesJournal(criteria) {
        switch (criteria) {
            case 'storage': this.soldSmartphones.sort((a, b) => b.storage - a.storage); break;
            case 'model': this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model)); break;
            default: throw new Error('Invalid criteria!');
        }
        let soldSmartphonesCount = this.soldSmartphones.length;
        let output = this.soldSmartphones.map((x) => `${x.model} / ${x.storage} GB / ${x.soldPrice.toFixed(2)} $`).join('\n')
        
        return `${this.retailer} has a total income of ${this.revenue.toFixed(2)} $\n${soldSmartphonesCount} smartphones sold: \n${output} `

    }

}

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.upgradePhones());

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 1, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('storage'));




