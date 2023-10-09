const { expect } = require('chai');
const chooseYourCar = require('./chooseYourCar');

describe('test func chooseYourCar', () => {

    describe('test func choosingType', () => {
        it('test', () => {
            expect(() => { chooseYourCar.choosingType('Sedan', 'red', 1888) }).to.throw('Invalid Year!');
        })
        it('test', () => {
            expect(() => { chooseYourCar.choosingType('Sedan', 'red', 2023) }).to.throw('Invalid Year!');
        })
        it('test', () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.equal('This red Sedan meets the requirements, that you have.');
        })
        it('test', () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2022)).to.equal('This red Sedan meets the requirements, that you have.');
        })
        it('test', () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2009)).to.equal('This Sedan is too old for you, especially with that red color.');
        })
        it('test', () => {
            expect(() => { chooseYourCar.choosingType('', 'red', 2010) }).to.throw('This type of car is not what you are looking for.');
        })
    })

    describe('test func brandName', () => {
        it('test', () => {
            expect(() => { chooseYourCar.brandName('BMW', 2) }).to.throw('Invalid Information!');
        })
        it('test', () => {
            expect(() => { chooseYourCar.brandName(['BMW'], '2') }).to.throw('Invalid Information!');
        })
        it('test', () => {
            expect(() => { chooseYourCar.brandName(['BMW'], -2) }).to.throw('Invalid Information!');
        })
        it('test', () => {
            expect(() => { chooseYourCar.brandName(['BMW',], 1) }).to.throw('Invalid Information!');
        })
        it('test', () => {
            expect(() => { chooseYourCar.brandName(['BMW',], 3) }).to.throw('Invalid Information!');
        })
        it('test', () => {
            expect(chooseYourCar.brandName(['BMW',], 0)).to.equal('');
        })
        it('test', () => {
            expect(chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], 1)).to.equal('BMW, Peugeot');
        })
    })

    describe('test func carFuelConsumption', () => {
        it('test', () => {
            expect(() => { chooseYourCar.carFuelConsumption('12', 2) }).to.throw('Invalid Information!');
        })
        it('test', () => {
            expect(() => { chooseYourCar.carFuelConsumption(2, '2') }).to.throw('Invalid Information!');
        })
        it('test', () => {
            expect(() => { chooseYourCar.carFuelConsumption(0, 2) }).to.throw('Invalid Information!');
        })
        it('test', () => {
            expect(() => { chooseYourCar.carFuelConsumption(2, 0) }).to.throw('Invalid Information!');
        })
        it('test', () => {
            expect(() => { chooseYourCar.carFuelConsumption(-2, -2) }).to.throw('Invalid Information!');
        })
        it('test', () => {
            expect(chooseYourCar.carFuelConsumption(100, 5)).to.equal('The car is efficient enough, it burns 5.00 liters/100 km.');
        })
        it('test', () => {
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
        })
        it('test', () => {
            expect(chooseYourCar.carFuelConsumption(100, 8)).to.equal('The car burns too much fuel - 8.00 liters!');
        })
        
    })

})