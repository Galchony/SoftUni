const { expect } = require("chai");

function createCalculator() {
    let value = 0;
    return {
        add: function (num) { value += Number(num); },
        subtract: function (num) { value -= Number(num); },
        get: function () { return value; }
    }
}

describe('test func createCalculator', () => {

    describe('test func add', () => {
        it('test if input is not a num', () => {
            expect(createCalculator().add('str')).to.equal(undefined);
        })
        it('test if input is a num', () => {
            let func = createCalculator();
            func.add(3);
            expect(func.get()).to.equal(3);
        })
        it('test if input is a str-num', () => {
            let func = createCalculator();
            func.add('3');
            expect(func.get()).to.equal(3);
        })
        it('test with empty input', () => {
            let func = createCalculator();
            func.add();
            expect(func.get()).to.be.NaN;
        })
        it('test with NaN input', () => {
            let func = createCalculator();
            func.add(NaN);
            expect(func.get()).to.be.NaN;
        })
        it('test with undefined input', () => {
            let func = createCalculator();
            func.add(undefined);
            expect(func.get()).to.be.NaN;
        })
        it('test with null input', () => {
            let func = createCalculator();
            func.add(null);
            expect(func.get()).to.equal(0);
        })
    });

    describe('test func subtract', () => {
        it('test if input is not a num', () => {
            expect(createCalculator().subtract('str')).to.equal(undefined);
        })
        it('test if input is a num', () => {
            let func = createCalculator();
            func.subtract(3);
            expect(func.get()).to.equal(-3);
        })
        it('test if input is a str-num', () => {
            let func = createCalculator();
            func.subtract('3');
            expect(func.get()).to.equal(-3);
        })
        it('test with empty input', () => {
            let func = createCalculator();
            func.subtract();
            expect(func.get()).to.be.NaN;
        })
        it('test with NaN input', () => {
            let func = createCalculator();
            func.subtract(NaN);
            expect(func.get()).to.be.NaN;
        })
        it('test with undefined input', () => {
            let func = createCalculator();
            func.subtract(undefined);
            expect(func.get()).to.be.NaN;
        })
        it('test with null input', () => {
            let func = createCalculator();
            func.subtract(null);
            expect(func.get()).to.equal(0);
        })
    });

    describe('test func get', () => {
        it('test with zero', () => {
            expect(createCalculator().get()).to.equal(0);
        })
    })

})