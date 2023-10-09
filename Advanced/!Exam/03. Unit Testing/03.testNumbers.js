const testNumbers = {
    sumNumbers: function (num1, num2) {
        let sum = 0;

        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        } else {
            sum = (num1 + num2).toFixed(2);
            return sum
        }
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input % 2 === 0) {
            return 'The number is even!';
        } else {
            return 'The number is odd!';
        }

    },
    averageSumArray: function (arr) {

        let arraySum = 0;

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    }
};

const { expect } = require('chai');

describe('test function testNumbers', () => {

    describe('test function sumNumbers', () => {

        it('test', () => {
            expect(testNumbers.sumNumbers('3', 3)).to.equal(undefined);
        })
        it('test', () => {
            expect(testNumbers.sumNumbers(5, '3')).to.equal(undefined);
        })
        it('test', () => {
            expect(testNumbers.sumNumbers(5, 0)).to.equal('5.00');
        })
        it('test', () => {
            expect(testNumbers.sumNumbers(552, 3230)).to.equal('3782.00');
        })
        it('test', () => {
            expect(testNumbers.sumNumbers(-5, 32)).to.equal('27.00');
        })
        it('test', () => {
            expect(testNumbers.sumNumbers(5.2, 32)).to.equal('37.20');
        })
    })

    describe('test function numberChecker', () => {
        it('test', () => {
            expect(() => { testNumbers.numberChecker([2, 4]) }).to.throw('The input is not a number!');
        })
        it('test', () => {
            expect(() => { testNumbers.numberChecker(NaN) }).to.throw('The input is not a number!');
        })
        it('test', () => {
            expect(testNumbers.numberChecker(4)).to.equal('The number is even!');
        })
        it('test', () => {
            expect(testNumbers.numberChecker(0)).to.equal('The number is even!');
        })
        it('test', () => {
            expect(testNumbers.numberChecker('8')).to.equal('The number is even!');
        })
        it('test', () => {
            expect(testNumbers.numberChecker('')).to.equal('The number is even!');
        })
        it('test', () => {
            expect(testNumbers.numberChecker(3)).to.equal('The number is odd!');
        })
        it('test', () => {
            expect(testNumbers.numberChecker(10021)).to.equal('The number is odd!');
        })
    })

    describe('test function averageSumArray', () => {
        it('test', () => {
            expect(testNumbers.averageSumArray([0])).to.equal(0);
        })
        it('test', () => {
            expect(testNumbers.averageSumArray([])).to.be.NaN;
        })
        it('test', () => {
            expect(testNumbers.averageSumArray([3,4,6,2])).to.equal(3.75);
        })
        it('test', () => {
            expect(testNumbers.averageSumArray([8,8,8])).to.equal(8);
        })
        it('test', () => {
            expect(testNumbers.averageSumArray([8,4])).to.equal(6);
        })
        it('test', () => {
            expect(testNumbers.averageSumArray([0,0])).to.equal(0);
        })
    })
})


