const { assert } = require('chai');
const { addFive } = require('./mathEnforcer');
const mathEnforcer = require('./mathEnforcer');

describe('tests functionality of object mathEnforcer', () => {
    describe('tests function addFive', () => {
        it('tests if parameter is string', () => {
            assert.equal(mathEnforcer.addFive("4"), undefined);
        });
        it('tests if parameter is arr', () => {
            assert.equal(mathEnforcer.addFive([2]), undefined);
        });
        it('tests if parameter is NaN', () => {
            assert.isNaN(mathEnforcer.addFive(NaN));
        });
        it('tests if parameter is correct positive num', () => {
            assert.equal(mathEnforcer.addFive(4), 9);
        });
        it('tests if parameter is correct negative num', () => {
            assert.equal(mathEnforcer.addFive(-4), 1);
        });
        it('tests if parameter is correct floating point num', () => {
            assert.equal(mathEnforcer.addFive(2.2), 7.2);
        });
    });
    describe('tests function subtractTen', () => {
        it('tests if parameter is string', () => {
            assert.equal(mathEnforcer.subtractTen("4"), undefined);
        });
        it('tests if parameter is arr', () => {
            assert.equal(mathEnforcer.subtractTen([2]), undefined);
        });
        it('tests if parameter is NaN', () => {
            assert.isNaN(mathEnforcer.subtractTen(NaN));
        });
        it('tests if parameter is correct positive num', () => {
            assert.equal(mathEnforcer.subtractTen(22), 12);
        });
        it('tests if parameter is correct negative num', () => {
            assert.equal(mathEnforcer.subtractTen(-4), -14);
        });
        it('tests if parameter is correct floating point num', () => {
            assert.equal(mathEnforcer.subtractTen(2.2), -7.8);
        });
    });
    describe('tests function sum', () => {
        it('tests if parameters are string and num', () => {
            assert.equal(mathEnforcer.sum("4",3), undefined);
        });
        it('tests if parameters are num and string', () => {
            assert.equal(mathEnforcer.sum(4,"3"), undefined);
        });
        it('tests if parameter is only one num', () => {
            assert.equal(mathEnforcer.sum(4), undefined);
        });
        it('tests if parameters are arr and num', () => {
            assert.equal(mathEnforcer.sum([2],2), undefined);
        });
        it('tests if parameters are NaN', () => {
            assert.isNaN(mathEnforcer.sum(NaN,NaN));
        });
        it('tests if parameters are correct positive nums', () => {
            assert.equal(mathEnforcer.sum(22,12), 34);
        });
        it('tests if parameters are correct negative nums', () => {
            assert.equal(mathEnforcer.sum(-4,-10), -14);
        });
        it('tests if parameters are correct floating point nums', () => {
            assert.equal(mathEnforcer.sum(2.2,1.3), 3.5);
        });
    });
})