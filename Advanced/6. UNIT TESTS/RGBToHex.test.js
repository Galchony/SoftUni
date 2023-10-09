const rgbToHexColor = require('./RGBToHex');
const { assert } = require('chai');

describe('tests function rgbToHexColor', () => {
    it('tests with three correct integers', () => {
        assert.equal(rgbToHexColor(12, 32, 142), '#0C208E');
    });
    it('tests with three zeros', () => {
        assert.equal(rgbToHexColor(0, 0, 0), '#000000');
    });
    it('tests with three 255', () => {
        assert.equal(rgbToHexColor(255, 255, 255), '#FFFFFF');
    });
    it('tests with two correct integers', () => {
        assert.equal(rgbToHexColor(2101, 32, 142), undefined);
        assert.equal(rgbToHexColor(1, 3112, 142), undefined);
        assert.equal(rgbToHexColor(1, 32, 14322), undefined);
    });
    it('tests with one correct integer', () => {
        assert.equal(rgbToHexColor(2101, -32, 142), undefined);
        assert.equal(rgbToHexColor(21, -3222, 1422), undefined);
        assert.equal(rgbToHexColor(2101, 32, 2142), undefined);
    });
    it('tests without correct integers', () => {
        assert.equal(rgbToHexColor(2101, -32, -142), undefined);
    });
    it('tests with smaller nums', () => {
        assert.equal(rgbToHexColor(-21, -32, -142), undefined);
    });
    it('tests with bigger nums', () => {
        assert.equal(rgbToHexColor(3221, 3232332, 2323142), undefined);
    });
    it('tests with strings', () => {
        assert.equal(rgbToHexColor("12", "32", "22"), undefined);
    });
    it('tests red value is float-nums', () => {
        assert.equal(rgbToHexColor(12.1, 32, 142), undefined);
    });
    it('tests green value is float-nums', () => {
        assert.equal(rgbToHexColor(12, 32.1, 142), undefined);
    });
    it('tests blue value is float-nums', () => {
        assert.equal(rgbToHexColor(12, 32, 142.5), undefined);
    });
    it('tests with three NaN', () => {
        assert.equal(rgbToHexColor(NaN,NaN,NaN), undefined);
    });
    it('tests with one num', () => {
        assert.equal(rgbToHexColor(42), undefined);
    });
              
})