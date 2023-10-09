const rentCar = {
    searchCar(shop, model) {
        let findModel = [];
        if (Array.isArray(shop) && typeof model == 'string') {
            for (let i = 0; i < shop.length; i++) {
                if (model == shop[i]) {
                    findModel.push(shop[i]);
                }
            }
            if (findModel.length !== 0) {
                return `There is ${findModel.length} car of model ${model} in the catalog!`;
            } else {
                throw new Error('There are no such models in the catalog!')
            }
        } else {
            throw new Error('Invalid input!')
        }
    },
    calculatePriceOfCar(model, days) {
        let catalogue = {
            Volkswagen: 20,
            Audi: 36,
            Toyota: 40,
            BMW: 45,
            Mercedes: 50
        };

        if (typeof model == 'string' && Number.isInteger(days)) {
            if (catalogue.hasOwnProperty(model)){ 
                let cost = catalogue[model] * days;
                return `You choose ${model} and it will cost $${cost}!`
            } else {
                throw new Error('No such model in the catalog!')
            }
        } else {
            throw new Error('Invalid input!')
        }
    },
    checkBudget(costPerDay, days, budget) {
        if (!Number.isInteger(costPerDay) || !Number.isInteger(days) || !Number.isInteger(budget)) {
            throw new Error('Invalid input!');
        } else {
            let cost = costPerDay * days;
            if (cost <= budget) {
                return `You rent a car!`
            } else {
                return 'You need a bigger budget!'
            }
        }
    }
}

const { expect } = require('chai');

describe('test rentCar', () => {

    describe('test function searchCar', () => {
        it('test', () => {
            expect(() => { rentCar.searchCar("Volkswagen", "Volkswagen") }).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(() => { rentCar.searchCar(["Volkswagen"], 3) }).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(() => { rentCar.searchCar(["Volkswagen"], 'Mazda') }).to.throw('There are no such models in the catalog!');
        })
        it('test', () => {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Volkswagen")).to.equal('There is 1 car of model Volkswagen in the catalog!');
        })
        it('test', () => {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi","BMW"], "BMW")).to.equal('There is 2 car of model BMW in the catalog!');
        })
    })
    
    describe('test function calculatePriceOfCar', () => {
        it('test', () => {
            expect(() => { rentCar.calculatePriceOfCar(3, 3) }).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(() => { rentCar.calculatePriceOfCar('Volkswagen', '3') }).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(() => { rentCar.calculatePriceOfCar('Volkswagen', 3.3) }).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(() => { rentCar.calculatePriceOfCar('Mazda', 3) }).to.throw('No such model in the catalog!');
        })
        it('test', () => {
            expect(rentCar.calculatePriceOfCar('Volkswagen', 3)).to.equal('You choose Volkswagen and it will cost $60!');
        })
        it('test', () => {
            expect(rentCar.calculatePriceOfCar('Audi', 3)).to.equal('You choose Audi and it will cost $108!');
        })
        it('test', () => {
            expect(rentCar.calculatePriceOfCar('Toyota', 3)).to.equal('You choose Toyota and it will cost $120!');
        })
        it('test', () => {
            expect(rentCar.calculatePriceOfCar('BMW', 3)).to.equal('You choose BMW and it will cost $135!');
        })
        it('test', () => {
            expect(rentCar.calculatePriceOfCar('Mercedes', 3)).to.equal('You choose Mercedes and it will cost $150!');
        })

    })

    describe('test function checkBudget', () => {
        it('test', () => {
            expect(() => { rentCar.checkBudget('3', 3, 3) }).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(() => { rentCar.checkBudget(3, '3', 3) }).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(() => { rentCar.checkBudget(3, 3,'3') }).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(() => { rentCar.checkBudget(3.1, 3.2,3.3) }).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(rentCar.checkBudget(4, 5,20) ).to.equal('You rent a car!');
        })
        it('test', () => {
            expect(rentCar.checkBudget(4, 1,20) ).to.equal('You rent a car!');
        })
        it('test', () => {
            expect(rentCar.checkBudget(3, 7,20) ).to.equal('You need a bigger budget!');
        })
    })
})