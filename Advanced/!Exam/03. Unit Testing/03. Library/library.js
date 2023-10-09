const library = {
    calcPriceOfBook(nameOfBook, year) {

        let price = 20;
        if (typeof nameOfBook != "string" || !Number.isInteger(year)) {
            throw new Error("Invalid input");
        } else if (year <= 1980) {
            let total = price - (price * 0.5);
            return `Price of ${nameOfBook} is ${total.toFixed(2)}`;
        }
        return `Price of ${nameOfBook} is ${price.toFixed(2)}`;
    },

    findBook: function (booksArr, desiredBook) {
        if (booksArr.length == 0) {
            throw new Error("No books currently available");
        } else if (booksArr.find(e => e == desiredBook)) {
            return "We found the book you want.";
        } else {
            return "The book you are looking for is not here!";
        }

    },
    arrangeTheBooks(countBooks) {
        const countShelves = 5;
        const availableSpace = countShelves * 8;

        if (!Number.isInteger(countBooks) || countBooks < 0) {
            throw new Error("Invalid input");
        } else if (availableSpace >= countBooks) {
            return "Great job, the books are arranged.";
        } else {
            return "Insufficient space, more shelves need to be purchased.";
        }
    }

};

const { expect } = require('chai');

describe('test function library', () => {

    describe('test function calcPriceOfBook', () => {
        it('test', () => {
            expect(() => { library.calcPriceOfBook(13, 3176) }).to.throw('Invalid input');
        })
        it('test', () => {
            expect(() => { library.calcPriceOfBook('Troy', '1999') }).to.throw('Invalid input');
        })
        it('test', () => {
            expect(() => { library.calcPriceOfBook('Troy', 1999.5) }).to.throw('Invalid input');
        })
        it('test', () => {
            expect(library.calcPriceOfBook('Troy', 1980)).to.equal(`Price of Troy is 10.00`);
        })
        it('test', () => {
            expect(library.calcPriceOfBook('Troy', 1860)).to.equal(`Price of Troy is 10.00`);
        })
        it('test', () => {
            expect(library.calcPriceOfBook('Troy', 2022)).to.equal(`Price of Troy is 20.00`);
        })
        it('test', () => {
            expect(library.calcPriceOfBook('Troy', 1981 )).to.equal(`Price of Troy is 20.00`);
        })
    })

    describe('test function findBook', () => {
        it('test', () => {
            expect(() => { library.findBook([], 'Troy') }).to.throw('No books currently available');
        })
        it('test', () => {
            expect(() => { library.findBook([], '') }).to.throw('No books currently available');
        })
        it('test', () => {
            expect(library.findBook(['Troy'], 'Troy' )).to.equal(`We found the book you want.`);
        })
        it('test', () => {
            expect(library.findBook(['Life Style','Troy'], 'Troy' )).to.equal(`We found the book you want.`);
        })
        it('test', () => {
            expect(library.findBook(['Life Style','Troy'], '' )).to.equal(`The book you are looking for is not here!`);
        })
        it('test', () => {
            expect(library.findBook(['Life Style','Torronto'], 'Troy' )).to.equal(`The book you are looking for is not here!`);
        })
    })

    describe('test function arrangeTheBooks', () => {
        it('test', () => {
            expect(() => { library.arrangeTheBooks('Troy') }).to.throw('Invalid input');
        })
        it('test', () => {
            expect(() => { library.arrangeTheBooks(-2) }).to.throw('Invalid input');
        })
        it('test', () => {
            expect(() => { library.arrangeTheBooks(2.2) }).to.throw('Invalid input');
        })
        it('test', () => {
            expect(library.arrangeTheBooks(40) ).to.equal('Great job, the books are arranged.');
        })
        it('test', () => {
            expect(library.arrangeTheBooks(20) ).to.equal('Great job, the books are arranged.');
        })
        it('test', () => {
            expect(library.arrangeTheBooks(0) ).to.equal('Great job, the books are arranged.');
        })
        it('test', () => {
            expect(library.arrangeTheBooks(41) ).to.equal('Insufficient space, more shelves need to be purchased.');
        })
        it('test', () => {
            expect(library.arrangeTheBooks(410) ).to.equal('Insufficient space, more shelves need to be purchased.');
        })
       
    })
})