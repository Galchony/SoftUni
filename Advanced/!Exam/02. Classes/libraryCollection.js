class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
    addBook(bookName, bookAuthor) {
        if (this.capacity === 0) {
            throw new Error('Not enough space in the collection.');
        }
        this.books.push({ bookName, bookAuthor, payed: false });
        this.capacity--;
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
    payBook(bookName) {
        let bookToPay = this.books.find(x => x.bookName === bookName);
        if (bookToPay === undefined) {
            throw new Error(`${bookName} is not in the collection.`)
        }
        if (bookToPay.payed) {
            throw new Error(`${bookName} has already been paid.`)
        }
        bookToPay.payed = true;
        return `${bookName} has been successfully paid.`
    }
    removeBook(bookName) {
        let bookToRemove = this.books.find(x => x.bookName === bookName);
        if (bookToRemove === undefined) {
            throw new Error(`The book, you're looking for, is not found.`)
        }
        if (!bookToRemove.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }
        this.books = this.books.filter(x => x !== bookToRemove);
        return `${bookName} remove from the collection.`
    }
    getStatistics(bookAuthor) {
        if (bookAuthor === undefined) {
            let output = `The book collection has ${this.capacity} empty spots left.\n`;
            output += `${this.books.sort((a, b) => a.bookName.localeCompare(b.bookName)).map(x => `${x.bookName} == ${x.bookAuthor} - ${x.payed ? 'Has Paid' : 'Not Paid'}.`).join('\n')}`
            return output;
        }
        let result = this.books.filter(x => x.bookAuthor === bookAuthor);
        if (result.length === 0) {
            throw new Error(`${bookAuthor} is not in the collection.`)
        }
        let output = `${result.map(x => `${x.bookName} == ${x.bookAuthor} - ${x.payed ? 'Has Paid' : 'Not Paid'}.`).join('\n')}`
        return output;
    }
}

// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

// const library = new LibraryCollection(3)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Aon Quixote', 'Galia'));
// console.log(library.getStatistics());

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());
