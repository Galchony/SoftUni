const cinema = {
    showMovies: function (movieArr) {

        if (movieArr.length == 0) {
            return 'There are currently no movies to show.';
        } else {
            let result = movieArr.join(', ');
            return result;
        }

    },
    ticketPrice: function (projectionType) {

        const schedule = {
            "Premiere": 12.00,
            "Normal": 7.50,
            "Discount": 5.50
        }
        if (schedule.hasOwnProperty(projectionType)) {
            let price = schedule[projectionType];
            return price;
        } else {
            throw new Error('Invalid projection type.')
        }

    },
    swapSeatsInHall: function (firstPlace, secondPlace) {

        if (!Number.isInteger(firstPlace) || firstPlace <= 0 || firstPlace > 20 ||
            !Number.isInteger(secondPlace) || secondPlace <= 0 || secondPlace > 20 || firstPlace === secondPlace) {
            return "Unsuccessful change of seats in the hall.";
        } else {
            return "Successful change of seats in the hall.";
        }

    }
};

const { expect } = require('chai');

describe('test function cinema', () => {

    describe('test function showMovies', () => {
        it('test', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        })
        it('test', () => {
            expect(cinema.showMovies(['Joker',])).to.equal('Joker');
        })
        it('test', () => {
            expect(cinema.showMovies(['Joker', 'Joker'])).to.equal('Joker, Joker');
        })
        it('test', () => {
            expect(cinema.showMovies([''])).to.equal('');
        })
    })

    describe('test function ticketPrice', () => {
        it('test', () => {
            expect(() => { cinema.ticketPrice('Galia') }).to.throw('Invalid projection type.');
        })
        it('test', () => {
            expect(() => { cinema.ticketPrice('') }).to.throw('Invalid projection type.');
        })
        it('test', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12);
        })
        it('test', () => {
            expect(cinema.ticketPrice('Normal')).to.equal(7.5);
        })
        it('test', () => {
            expect(cinema.ticketPrice('Discount')).to.equal(5.5);
        })
    })

    describe('test function swapSeatsInHall', () => {
        it('test', () => {
            expect(cinema.swapSeatsInHall('5',8)).to.equal('Unsuccessful change of seats in the hall.');
        })
        it('test', () => {
            expect(cinema.swapSeatsInHall(5,'8')).to.equal('Unsuccessful change of seats in the hall.');
        })
        it('test', () => {
            expect(cinema.swapSeatsInHall(0,5)).to.equal('Unsuccessful change of seats in the hall.');
        })
        it('test', () => {
            expect(cinema.swapSeatsInHall(5,0)).to.equal('Unsuccessful change of seats in the hall.');
        })
        it('test', () => {
            expect(cinema.swapSeatsInHall(-5,8)).to.equal('Unsuccessful change of seats in the hall.');
        })
        it('test', () => {
            expect(cinema.swapSeatsInHall(8,-5)).to.equal('Unsuccessful change of seats in the hall.');
        })
        it('test', () => {
            expect(cinema.swapSeatsInHall(21,8)).to.equal('Unsuccessful change of seats in the hall.');
        })
        it('test', () => {
            expect(cinema.swapSeatsInHall(5,21)).to.equal('Unsuccessful change of seats in the hall.');
        })
        it('test', () => {
            expect(cinema.swapSeatsInHall(5,5)).to.equal('Unsuccessful change of seats in the hall.');
        })
        it('test', () => {
            expect(cinema.swapSeatsInHall(5.2,8)).to.equal('Unsuccessful change of seats in the hall.');
        })
        it('test', () => {
            expect(cinema.swapSeatsInHall(5,8.6)).to.equal('Unsuccessful change of seats in the hall.');
        })
        it('test', () => {
            expect(cinema.swapSeatsInHall(1,4)).to.equal('Successful change of seats in the hall.');
        })
        it('test', () => {
            expect(cinema.swapSeatsInHall(15,1)).to.equal('Successful change of seats in the hall.');
        })
        it('test', () => {
            expect(cinema.swapSeatsInHall(20,8)).to.equal('Successful change of seats in the hall.');
        })
        it('test', () => {
            expect(cinema.swapSeatsInHall(19,20)).to.equal('Successful change of seats in the hall.');
        })
    })
})