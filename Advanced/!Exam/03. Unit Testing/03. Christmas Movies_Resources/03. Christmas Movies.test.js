const ChristmasMovies = require('./03. Christmas Movies_Resources');
const { expect } = require('chai');

describe('test function', () => {

    describe('test function', () => {
        it('test', () => {
            let christmas = new ChristmasMovies();
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            expect(() => { christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']) }).to.throw('You already own Home Alone in your collection!');
        })
        it('test', () => {
            let christmas = new ChristmasMovies();
            let a = christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            expect(a).to.equal('You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!');
        })
        it('test', () => {
            let christmas = new ChristmasMovies();
            let a = christmas.buyMovie('', []);
            expect(a).to.equal('You just got  to your collection in which  are taking part!');
        })
        it('test', () => {
            let christmas = new ChristmasMovies();
            let a = christmas.buyMovie('', ['']);
            expect(a).to.equal('You just got  to your collection in which  are taking part!');
        })
        it('test', () => {
            let christmas = new ChristmasMovies();
            let a = christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            expect(a).to.equal('You just got The Grinch to your collection in which Benedict Cumberbatch, Pharrell Williams are taking part!');
        })
        it('test', () => {
            let christmas = new ChristmasMovies();
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            christmas.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            let a = christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            expect(a).to.equal('You just got The Grinch to your collection in which Benedict Cumberbatch, Pharrell Williams are taking part!');
        })
        it('test', () => {
            let christmas = new ChristmasMovies();
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            christmas.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            expect(()=>{christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);}).to.throw('You already own Home Alone in your collection!');
        })
    })

    describe('test function', () => {
        it('test', () => {
            let christmas = new ChristmasMovies();
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            christmas.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            expect(() => { christmas.discardMovie('The Grinch') }).to.throw('The Grinch is not watched!');
        })
        it('test', () => {
            let christmas = new ChristmasMovies();
            // christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            christmas.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            // christmas.watchMovie('Home Alone');
            expect(() => { christmas.discardMovie('Home Alone') }).to.throw('Home Alone is not at your collection!');
        })
        it('test', () => {
            let christmas = new ChristmasMovies();
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            christmas.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            christmas.watchMovie('Home Alone');
            expect(christmas.discardMovie('Home Alone')).to.equal('You just threw away Home Alone!');
        })

    })

    describe('test function', () => {
        it('test', () => {
            let christmas = new ChristmasMovies();
            // christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            christmas.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            expect(() => { christmas.watchMovie('Home Alone') }).to.throw('No such movie in your collection!');
        })
        it('test', () => {
            let christmas = new ChristmasMovies();
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            christmas.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            expect(() => { christmas.watchMovie('Home Alone') }).to.not.throw('No such movie in your collection!');
        })
        it('test', () => {
            let christmas = new ChristmasMovies();
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            christmas.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            christmas.watchMovie('Home Alone');
            expect(() => { christmas.watchMovie('Home Alone') }).to.not.throw('No such movie in your collection!');
        })
    })

    describe('test function', () => {
        it('test', () => {
            let christmas = new ChristmasMovies();
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            christmas.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            expect(() => { christmas.favouriteMovie() }).to.throw('You have not watched a movie yet this year!');
        })
        it('test', () => {
            let christmas = new ChristmasMovies();
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            christmas.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            christmas.watchMovie('Home Alone');
            expect(christmas.favouriteMovie()).to.equal('Your favourite movie is Home Alone and you have watched it 1 times!');
        })
        it('test', () => {
            let christmas = new ChristmasMovies();
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            christmas.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('The Grinch');
            christmas.watchMovie('The Grinch');
            expect(christmas.favouriteMovie()).to.equal('Your favourite movie is The Grinch and you have watched it 2 times!');
        })

    })
    describe('test function', () => {

        it('test', () => {
            let christmas = new ChristmasMovies();
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone 2' );
            expect(christmas.mostStarredActor()).to.equal('The most starred actor is Macaulay Culkin and starred in 2 movies!');
        })
        it('test', () => {
            let christmas = new ChristmasMovies();
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.watchMovie('Home Alone');
            expect(christmas.mostStarredActor()).to.equal('The most starred actor is Macaulay Culkin and starred in 1 movies!');
        })
        it('test', () => {
            let christmas = new ChristmasMovies();
            expect(()=>{christmas.mostStarredActor()}).to.throw('You have not watched a movie yet this year!');
        })
    })
})