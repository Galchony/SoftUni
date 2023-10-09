const isOddOrEven = require('./evenOrOdd');
const { assert } = require('chai');

describe("tests function isOddOrEven", () => {
    it('tests input with number', () => {
        assert.equal(isOddOrEven(5), undefined);
    })
    it('tests input with NaN', () => {
        assert.equal(isOddOrEven(NaN), undefined);
    })
    it('tests input with null', () => {
        assert.equal(isOddOrEven(null), undefined);
    })
    it('tests input with array', () => {
        assert.equal(isOddOrEven([]), undefined);
    })
    it('tests even string', () => {
        assert.equal(isOddOrEven('love'), 'even');
    })
    it('tests odd string', () => {
        assert.equal(isOddOrEven('you'), 'odd');
    })
    it('tests odd empty string', () => {
        assert.equal(isOddOrEven(''), 'even');
    })
    it('tests odd one char - string', () => {
        assert.equal(isOddOrEven('a'), 'odd');
    })
})