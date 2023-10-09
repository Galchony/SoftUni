const flowerShop = {
    calcPriceOfFlowers(flower, price, quantity) {
        if (typeof flower != 'string' || !Number.isInteger(price) || !Number.isInteger(quantity)) {
            throw new Error('Invalid input!');
        } else {
            let result = price * quantity;
            return `You need $${result.toFixed(2)} to buy ${flower}!`;
        }
    },
    checkFlowersAvailable(flower, gardenArr) {
        if (gardenArr.indexOf(flower) >= 0) {
            return `The ${flower} are available!`;
        } else {
            return `The ${flower} are sold! You need to purchase more!`;
        }
    },
    sellFlowers(gardenArr, space) {
        let shop = [];
        let i = 0;
        if (!Array.isArray(gardenArr) || !Number.isInteger(space) || space < 0 || space >= gardenArr.length) {
            throw new Error('Invalid input!');
        } else {
            while (gardenArr.length > i) {
                if (i != space) {
                    shop.push(gardenArr[i]);
                }
                i++
            }
        }
        return shop.join(' / ');
    }
}


const { expect } = require('chai');

describe('test flowerShop', () => {

    describe('test function calcPriceOfFlowers', () => {
        it('test', () => {
            expect(() => { flowerShop.calcPriceOfFlowers(3,4,5)}).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(() => { flowerShop.calcPriceOfFlowers('Rose','4',5)}).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(() => { flowerShop.calcPriceOfFlowers('Rose',4,'5')}).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(() => { flowerShop.calcPriceOfFlowers('Rose',4.4,5.5)}).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(flowerShop.calcPriceOfFlowers('Rose',4,5)).to.equal('You need $20.00 to buy Rose!');
        })
        it('test', () => {
            expect(flowerShop.calcPriceOfFlowers('',0,5)).to.equal('You need $0.00 to buy !');
        })
    })
   
    describe('test function checkFlowersAvailable', () => {
        it('test', () => {
            expect(flowerShop.checkFlowersAvailable('Rose',['Rose'])).to.equal('The Rose are available!');
        })
        it('test', () => {
            expect(flowerShop.checkFlowersAvailable('Lily',['Rose'])).to.equal('The Lily are sold! You need to purchase more!');
        })
        it('test', () => {
            expect(flowerShop.checkFlowersAvailable('Lily',['Rose','Lily'])).to.equal('The Lily are available!');
        })
    })

    describe('test function sellFlowers', () => {
        it('test', () => {
            expect(() => { flowerShop.sellFlowers(3,4)}).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(() => { flowerShop.sellFlowers(['Rose','Lily'],'4')}).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(() => { flowerShop.sellFlowers(['Rose','Lily'],2)}).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(() => { flowerShop.sellFlowers(['Rose','Lily'],2.2)}).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(() => { flowerShop.sellFlowers(['Rose','Lily'],3)}).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(() => { flowerShop.sellFlowers(['Rose','Lily'],-3)}).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(flowerShop.sellFlowers(['Rose','Lily'],0)).to.equal('Lily');
        })
        it('test', () => {
            expect(flowerShop.sellFlowers(['Rose','Lily'],1)).to.equal('Rose');
        })
        it('test', () => {
            expect(flowerShop.sellFlowers(['Rose','Lily','Lily','Lily'],1)).to.equal('Rose / Lily / Lily');
        })
    })
})