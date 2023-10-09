const sum = require('./sumOfNumbers');
const {assert} = require('chai');

describe('tests the functionality of sum function', ()=>{
    it('test if the result is correct', ()=>{
        assert.equal(sum([1,2,3]),6);
    })
    it('test to sum array with strings', ()=>{
        assert.equal(sum(["1","2","3"]),6);
    })
    it('test to sum array with one element', ()=>{
        assert.equal(sum([1]),1);
    })
    it('test to sum array without elements', ()=>{
        assert.equal(sum([]),0);
    })
    
})