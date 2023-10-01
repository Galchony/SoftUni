class Storage {
    constructor(capacity) {
        this.capacity = capacity;
    }
    storage = {};
    totalCost = 0;

    addProduct(product) {
        product = {
            name: product.name,
            price: product.price,
            quantity: product.quantity
        }
        this.storage[product.name] = product;
        this.capacity -= product.quantity;
        this.totalCost += product.price * product.quantity;
    }
    getProducts() {
        let json = [];
        for (const key in this.storage) {
            let text = JSON.stringify(this.storage[key]);
            json.push(text)
        }
        return json.join("\n");
    }
}
let productOne = {name: 'Tomato', price: 0.90, quantity: 19};
let productTwo = {name: 'Potato', price: 1.10, quantity: 10};
let storage = new Storage(30);
storage.addProduct(productOne);
storage.addProduct(productTwo);
console.log(storage.totalCost);

