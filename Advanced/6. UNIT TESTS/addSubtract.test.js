const createCalculator = require('./addSubtract');
const { assert } = require('chai');

describe('tests function createCalculator', () => {
    it('tests function sum', () => {
        assert.equal(createCalculator().add(5), undefined)
    }); it('tests function subtract', () => {
        assert.equal(createCalculator().subtract(2), undefined)
    });
    it('tests function get', () => {
        assert.equal(createCalculator().get(), 0);
    });
    it('tests functions sum and get at the same time', () => {
        let obj = createCalculator();
        obj.add(5);
        let result = obj.get()
        assert.equal(result, 5);
    });
    it('tests functions subtract and get at the same time', () => {
        let obj = createCalculator();
        obj.subtract(35);
        let result = obj.get()
        assert.equal(result, -35);
    });
    it('tests functions sum,subtract and get at the same time', () => {
        let obj = createCalculator();
        obj.add(12);
        obj.subtract(48);
        let result = obj.get()
        assert.equal(result, -36);
    });
    it('tests functions sum with NaN,subtract and get', () => {
        let obj = createCalculator();
        obj.add(NaN);
        obj.subtract(2);
        let result = obj.get()
        assert.isNaN(result);
    });
    it('tests functions sum,subtract and get with strings', () => {
        let obj = createCalculator();
        obj.add("12");
        obj.subtract("48");
        let result = obj.get()
        assert.equal(result, -36);
    });
    it('tests functions sum,subtract and get with string ans num-string', () => {
        let obj = createCalculator();
        obj.add("assa");
        obj.subtract("48");
        let result = obj.get()
        assert.isNaN(result, NaN);
    });
    it('tests functions sum,subtract and get with null ans num', () => {
        let obj = createCalculator();
        obj.add(null);
        obj.subtract(48);
        let result = obj.get()
        assert.equal(result, -48);
    });
    it('tests functions sum and subtract with zero', () => {
        let obj = createCalculator();
        obj.add(0);
        obj.subtract(0);
        let result = obj.get()
        assert.equal(result, 0);
    });
    it('tests functions sum with empty str', () => {
        let obj = createCalculator();
        obj.add("");
        let result = obj.get()
        assert.equal(result, 0);
    });
    it('tests functions sum without args', () => {
        let obj = createCalculator();
        obj.add();
        obj.subtract();
        let result = obj.get()
        assert.isNaN(result);
    });
    it('tests functions sum,subtract and get at the same time', () => {
        let obj = createCalculator();
        obj.add(null);
        obj.subtract(null);
        let result = obj.get()
        assert.equal(result, 0);
    });
    it('tests function createCalculator', () => {
        let obj = createCalculator();
        assert.isObject(obj);
    });
    it('tests function with float nums', () => {
        let obj = createCalculator();
        obj.add(12.1);
        obj.subtract(4.2);
        let result = obj.get()
        assert.equal(result, 7.8999999999999995);
    });
    it('tests functions sum with undefined', () => {
        let obj = createCalculator();
        obj.add(undefined);
        obj.subtract(undefined);
        let result = obj.get()
        assert.isNaN(result);
    });
    it('tests functions sum with string-num', () => {
        let obj = createCalculator();
        obj.add("-3");
        obj.subtract("-4");
        let result = obj.get()
        assert.equal(result,1);
    });
    it('tests functions sum with arr', () => {
        let obj = createCalculator();
        obj.add([]);
        obj.subtract([]);
        let result = obj.get()
        assert.equal(result,0);
    });
    it('tests functions sum with obj', () => {
        let obj = createCalculator();
        obj.add({});
        obj.subtract({});
        let result = obj.get()
        assert.isNaN(result);
    });

})
