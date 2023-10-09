const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr
    }
};

const { expect } = require('chai');

describe('test function numberOperations', () => {

    describe('test function powNumber', () => {
        it('test', () => {
            expect(numberOperations.powNumber(3)).to.equal(9);
        })
        it('test', () => {
            expect(numberOperations.powNumber(0)).to.equal(0);
        })
        it('test', () => {
            expect(numberOperations.powNumber(NaN)).to.be.NaN;
        })
        it('test', () => {
            expect(numberOperations.powNumber()).to.be.NaN;
        })
        it('test', () => {
            expect(numberOperations.powNumber('4')).to.equal(16);
        })
        it('test', () => {
            expect(numberOperations.powNumber([])).to.equal(0);
        })
    })
    
    describe('test function numberChecker', () => {
        it('test', () => {
            expect(() => {numberOperations.numberChecker('str') }).to.throw('');
        })
        it('test', () => {
            expect(() => {numberOperations.numberChecker(NaN) }).to.throw('');
        })
        it('test', () => {
            expect(() => {numberOperations.numberChecker() }).to.throw('');
        })
        it('test', () => {
            expect(numberOperations.numberChecker(8)).to.equal('The number is lower than 100!');
        })
        it('test', () => {
            expect(numberOperations.numberChecker(0)).to.equal('The number is lower than 100!');
        })
        it('test', () => {
            expect(numberOperations.numberChecker('1')).to.equal('The number is lower than 100!');
        })
        it('test', () => {
            expect(numberOperations.numberChecker([3])).to.equal('The number is lower than 100!');
        })
        it('test', () => {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
        })
        it('test', () => {
            expect(numberOperations.numberChecker(200)).to.equal('The number is greater or equal to 100!');
        })

    })

    describe('test function sumArrays' , () => {
        it('test', () => {
            expect(numberOperations.sumArrays([200],[100])).to.eql([300]);
        })
        it('test', () => {
            expect(numberOperations.sumArrays([100],[200])).to.eql([300]);
        })
        it('test', () => {
            expect(numberOperations.sumArrays([100,100],[200])).to.eql([ 300, 100 ]);
        })
        it('test', () => {
            expect(numberOperations.sumArrays([100,100],[200,200,200])).to.eql([300, 300, 200]);
        })
        it('test', () => {
            expect(numberOperations.sumArrays([],[200,200,200])).to.eql([200, 200, 200]);
        })
        it('test', () => {
            expect(numberOperations.sumArrays([0],[])).to.eql([0]);
        })
    })
})