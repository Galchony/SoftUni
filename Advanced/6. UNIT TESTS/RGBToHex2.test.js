const { expect } = require('chai');
const rgbToHexColor = require('./RGBToHex2');


describe('test func rgbToHexColor', () => {
    it('test if red < 0', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.equal(undefined);
    })
    it('test if green < 0', () => {
        expect(rgbToHexColor(0, -1, 0)).to.equal(undefined);
    })
    it('test if blue < 0', () => {
        expect(rgbToHexColor(0, 0, -1)).to.equal(undefined);
    })
    it('test if red > 255', () => {
        expect(rgbToHexColor(256, 0, 0)).to.equal(undefined);
    })
    it('test if green > 255', () => {
        expect(rgbToHexColor(0, 256, 0)).to.equal(undefined);
    })
    it('test if blue > 255', () => {
        expect(rgbToHexColor(0, 0, 256)).to.equal(undefined);
    })
    it('test if red is not intg', () => {
        expect(rgbToHexColor(0.2, 0, 0)).to.equal(undefined);
    })
    it('test if green is not intg', () => {
        expect(rgbToHexColor(0, 0.4, 0)).to.equal(undefined);
    })
    it('test if blue is not intg', () => {
        expect(rgbToHexColor(0, 0, 2.8)).to.equal(undefined);
    })
    it('test if red = 0, green = 0, blue = 0', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    })
    it('test if red = 255, green = 255, blue = 255', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    })
    it('test if input is correct (red = 1, green = 2, blue = 3)', () => {
        expect(rgbToHexColor(1, 2, 3)).to.equal('#010203');
    })
    it('test if input is incorrect - missing param', () => {
        expect(rgbToHexColor(1, 2)).to.equal(undefined);
    })
    it('test if input is incorrect - arrs', () => {
        expect(rgbToHexColor([1],[2],[2])).to.equal(undefined);
    })
})