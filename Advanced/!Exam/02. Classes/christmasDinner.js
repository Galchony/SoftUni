class ChristmasDinner {
    budget;
    constructor(budget) {
        this.dishes = [];
        this.products = [];
        this.guests = {};
      
    }
   
    get budget() {
        return this.budget;
    }
    shopping(product) {
        let [prod, price] = product;
        if (this.budget < price) {
            throw new Error('Not enough money to buy this product');
        }
    }
}

let dinner = new ChristmasDinner(-2);
dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
