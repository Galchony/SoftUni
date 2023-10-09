class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }
    loadingVegetables(vegetables) {
        let arr = [];
        for (const vegy of vegetables) {
            let [type, quantity, price] = vegy.split(' ');
            price = Number(price);
            quantity = Number(quantity);
            let foundedVegy = this.availableProducts.find(x => x.type === type);
            if (foundedVegy !== undefined) {
                foundedVegy.quantity += quantity;
                foundedVegy.price = Math.max(price, foundedVegy.price);
            } else {
                this.availableProducts.push({ type, quantity: Number(quantity), price: Number(price) });
                arr.push(type);
            }
        }

        return `Successfully added ${arr.join(', ')}`
    }
    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (const product of selectedProducts) {
            let [type, quantity] = product.split(' ');
            let foundedVegy = this.availableProducts.find(x => x.type === type);
            if (foundedVegy === undefined) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            if (quantity > foundedVegy.quantity) {
                throw new Error (`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            foundedVegy.quantity -= quantity;
            let currentPrice = foundedVegy.price*quantity;
            totalPrice += currentPrice;
           
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }
    rottingVegetable(type, quantity) {
        let foundedVegy = this.availableProducts.find(x => x.type === type);
        if (foundedVegy === undefined) {
            throw new Error(`${type} is not available in the store.`);
        }
        if (foundedVegy.quantity < quantity) {
            foundedVegy.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`
        } else {
            foundedVegy.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`
        }
    }
    revision() {
        let output = [`Available vegetables:`];
        output.push(`${this.availableProducts.sort((a, b) => a.price - b.price).map(x => `${x.type}-${x.quantity}-$${x.price}`).join('\n')}`)
        output.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
        return output.join('\n');
    }
}

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Celery 5.5 2.2", "Beans 10 2.8", "Celery 0.5 2.5"]));
// console.log(vegStore.revision());

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
