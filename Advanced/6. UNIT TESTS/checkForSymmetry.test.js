const isSymmetric = require('./checkForSymmetry');
const { assert } = require('chai');

describe('tests function isSymmetric ', () => {
    it('tests if the input is symmetric', () => {
        assert.equal(isSymmetric([1, 2, 3, 2, 1]), true);
    });
    it('tests if the input is non-symmetric', () => {
        assert.equal(isSymmetric([1, 4, 2, 1]), false);
    });
    it('tests if the input is array with same elements', () => {
        assert.equal(isSymmetric([0, 0, 0, 0, 0, 0]), true);
    });
    it('tests if the input is array with one element', () => {
        assert.equal(isSymmetric([1]), true);
    });
    it('tests if the input is array without elements', () => {
        assert.equal(isSymmetric([]), true);
    });
    it('tests if the input is array with strings', () => {
        assert.equal(isSymmetric(['cars', 'baby','cars']), true);
    })
    it('tests if the input is array with one symmetric string', () => {
        assert.equal(isSymmetric(['asdffdsa']), true);
    });
    it('tests if the input is array with diff strings', () => {
        assert.equal(isSymmetric(['act', 'baby']), false);
    });
    it('tests if the input is array with string and num', () => {
        assert.equal(isSymmetric(['act', 4]), false);
    });
    it('tests if the input is array with string and num - symmetric', () => {
        assert.equal(isSymmetric(['act', 4, 'act']), true);
    });
    it('tests if the input is array with empty string', () => {
        assert.equal(isSymmetric(['']), true);
    });
    it('tests if the input is num', () => {
        assert.equal(isSymmetric(3), false);
    });
    it('tests if the input is string', () => {
        assert.equal(isSymmetric('love'), false);
    });
    it('tests if the input is obj', () => {
    assert.equal(isSymmetric({ name: "Galia" }), false);
    });
    it('tests if the input is NaN', () => {
        assert.equal(isSymmetric(NaN), false);
    });
    it('tests if the input is undefined', () => {
        assert.equal(isSymmetric(undefined), false);
    });
    it('tests if the input has two param', () => {
        assert.equal(isSymmetric(3,3), false);
    });
    it('tests if the inputis arr with NaN', () => {
        assert.equal(isSymmetric([NaN]), true);
    });

})

