const lookupChar = require('./charLookup');
const { assert } = require('chai');
const { describe } = require('mocha');

describe('tests function lookupChar', () => {
    it('tests if input is number and index(number)', () => {
        assert.equal(lookupChar(4231, 1), undefined);
    });
    it('tests if input is arr and index(number)', () => {
        assert.equal(lookupChar(['love'], 1), undefined);
    });
    it('tests if input is str and index(str)', () => {
        assert.equal(lookupChar('love', "1"), undefined);
    });
    it('tests if input is str and index(arr)', () => {
        assert.equal(lookupChar('love', [1]), undefined);
    });
    it('tests if input is str and index(float-num)', () => {
        assert.equal(lookupChar('love', 1.1), undefined);
    });
    it('tests both parameters are of the correct type, but the value of the index is bigger', () => {
        assert.equal(lookupChar('love', 5), "Incorrect index");
    });
    it('tests both parameters are of the correct type, but the value of the index is smaller', () => {
        assert.equal(lookupChar('love', -1), "Incorrect index");
    });
    it('tests both parameters are of the correct type, but the value of the index is equal to the string length', () => {
        assert.equal(lookupChar('love', 4), "Incorrect index");
    });
    it('tests both parameters have correct types and values', () => {
        assert.equal(lookupChar('love', 3), "e");
    });
    it('tests both parameters have correct types and values, index is zero', () => {
        assert.equal(lookupChar('love', 0), "l");
    });
    
})