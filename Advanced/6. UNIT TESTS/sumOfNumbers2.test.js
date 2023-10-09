const { expect } = require('chai');
let sum = require('./sumOfNumbers2');

describe('test func sum', ()=>{
    it('test with empty arr', ()=>{
        expect(sum([])).to.equal(0);
    });
    it('test with arr with correct nums', ()=>{
        expect(sum([2,3,5,])).to.equal(10);
    });
    it('test with arr with 0', ()=>{
        expect(sum([0])).to.equal(0);
    });
    it('test with arr with floating point', ()=>{
        expect(sum([2.2,3.3])).to.equal(5.5);
    });
    it('test with input - str', ()=>{
        expect(sum('galia')).to.be.NaN;
    });
    it('test with input arr with str', ()=>{
        expect(sum(['galia'])).to.be.NaN;
    });
})