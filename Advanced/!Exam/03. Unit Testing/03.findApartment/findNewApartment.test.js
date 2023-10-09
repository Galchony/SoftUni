const { expect } = require('chai');
let findNewApartment = require('./findApartment.js');

describe('test findNewApartment function', () => {
    describe('test isGoodLocation ', () => {

        it('test', () => {
            expect(() => { findNewApartment.isGoodLocation(3, true) }).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(() => { findNewApartment.isGoodLocation('Varna', 3) }).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(findNewApartment.isGoodLocation('Galia', true)).to.equal('This location is not suitable for you.');
        })
        it('test', () => {
            expect(findNewApartment.isGoodLocation('', true)).to.equal('This location is not suitable for you.');
        })
        it('test', () => {
            expect(findNewApartment.isGoodLocation('', false)).to.equal('This location is not suitable for you.');
        })
        it('test', () => {
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!');
        })
        it('test', () => {
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!');
        })
        it('test', () => {
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal('You can go on home tour!');
        })
        it('test', () => {
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal('You can go on home tour!');
        })
        it('test', () => {
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.');
        })
        it('test', () => {
            expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal('There is no public transport in area.');
        })
        it('test', () => {
            expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal('There is no public transport in area.');
        })
    })

    describe('test isLargeEnough ', () => {

        it('test', () => {
            expect(() => { findNewApartment.isLargeEnough('str', 4) }).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(() => { findNewApartment.isLargeEnough({}, 4) }).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(() => { findNewApartment.isLargeEnough([], 4) }).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(() => { findNewApartment.isLargeEnough([40,50,60], 'str') }).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(findNewApartment.isLargeEnough([40,50,60], 50)).to.equal('50, 60');
        })
        it('test', () => {
            expect(findNewApartment.isLargeEnough([40,50,60], 50)).to.equal('50, 60');
        })
        it('test', () => {
            expect(findNewApartment.isLargeEnough([40,55,60], 50)).to.equal('55, 60');
        })
        it('test', () => {
            expect(findNewApartment.isLargeEnough([50], 50)).to.equal('50');
        })
        it('test', () => {
            expect(findNewApartment.isLargeEnough([50], 60)).to.equal('');
        })
    })

    describe('test isItAffordable ', () => {

        it('test', () => {
            expect(() => { findNewApartment.isItAffordable('4', 4) }).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(() => { findNewApartment.isItAffordable(4, "4") }).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(() => { findNewApartment.isItAffordable(-2, 4) }).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(() => { findNewApartment.isItAffordable(4, -2) }).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(() => { findNewApartment.isItAffordable(0, 2) }).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(() => { findNewApartment.isItAffordable(1, 0) }).to.throw('Invalid input!');
        })
        it('test', () => {
            expect(findNewApartment.isItAffordable(50,40)).to.equal("You don't have enough money for this house!");
        })
        it('test', () => {
            expect(findNewApartment.isItAffordable(40,40)).to.equal("You can afford this home!");
        })
        it('test', () => {
            expect(findNewApartment.isItAffordable(30,40)).to.equal("You can afford this home!");
        })
    })
})