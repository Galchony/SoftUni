const sum = require('./test');
const { assert } = require('chai');
const { it } = require('mocha');

describe('sum function test', () => {
    it('test with two numbers', () => {
        assert.equal(sum(3, 4), 7);
    });
    it('test with str and num', () => {
        assert.equal(sum("3", 4), 7);

    });
    it ('test with num and NaN', () => {
        assert.isNaN(sum(3, NaN));
    });
});