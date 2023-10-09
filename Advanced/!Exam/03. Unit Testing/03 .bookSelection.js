const bookSelection = {
  isGenreSuitable(genre, age) {
    if (age <= 12 && (genre === "Thriller" || genre === "Horror")) {
      return `Books with ${genre} genre are not suitable for kids at ${age} age`;
    } else {
      return `Those books are suitable`;
    }
  },
  isItAffordable(price, budget) {
    if (typeof price !== "number" || typeof budget !== "number") {
      throw new Error("Invalid input");
    }

    let result = budget - price;

    if (result < 0) {
      return "You don't have enough money";
    } else {
      return `Book bought. You have ${result}$ left`;
    }
  },
  suitableTitles(array, wantedGenre) {
    let resultArr = [];

    if (!Array.isArray(array) || typeof wantedGenre !== "string") {
      throw new Error("Invalid input");
    }
    array.map((obj) => {
      if (obj.genre === wantedGenre) {
        resultArr.push(obj.title);
      }
    });
    return resultArr;
  },
};

const { expect } = require('chai');

describe('test function bookSelection', () => {

  describe('test function isGenreSuitable', () => {
    it('test', () => {
      expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age');
    })
    it('test', () => {
      expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
    })
    it('test', () => {
      expect(bookSelection.isGenreSuitable('Horror', 4)).to.equal('Books with Horror genre are not suitable for kids at 4 age');
    })
    it('test', () => {
      expect(bookSelection.isGenreSuitable('Horror', 0)).to.equal('Books with Horror genre are not suitable for kids at 0 age');
    })
    it('test', () => {
      expect(bookSelection.isGenreSuitable('Horror', 13)).to.equal('Those books are suitable');
    })
    it('test', () => {
      expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal('Those books are suitable');
    })
    it('test', () => {
      expect(bookSelection.isGenreSuitable('Galia', 12)).to.equal('Those books are suitable');
    })
    it('test', () => {
      expect(bookSelection.isGenreSuitable('', 12)).to.equal('Those books are suitable');
    })

  })

  describe('test function isItAffordable', () => {
    it('test', () => {
      expect(() => { bookSelection.isItAffordable('3', 3) }).to.throw('Invalid input');
    })
    it('test', () => {
      expect(() => { bookSelection.isItAffordable(3, '3') }).to.throw('Invalid input');
    })
    it('test', () => {
      expect(bookSelection.isItAffordable(8, 6)).to.equal("You don't have enough money");
    })
    it('test', () => {
      expect(bookSelection.isItAffordable(7, 6)).to.equal("You don't have enough money");
    })
    it('test', () => {
      expect(bookSelection.isItAffordable(3, 6)).to.equal("Book bought. You have 3$ left");
    })
    it('test', () => {
      expect(bookSelection.isItAffordable(6, 6)).to.equal("Book bought. You have 0$ left");
    })

  })

  describe('test function suitableTitles', () => {
    it('test', () => {
      expect(() => { bookSelection.suitableTitles('3', 'str') }).to.throw('Invalid input');
    })
    it('test', () => {
      expect(() => { bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 3) }).to.throw('Invalid input');
    })
    it('test', () => {
      expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'Thriller') ).to.eql([ 'The Da Vinci Code' ]);
    })
    it('test', () => {
      expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'Horror') ).to.eql([]);
    })
    it('test', () => {
      expect(bookSelection.suitableTitles([], 'Horror') ).to.eql([]);
    })
  })
})
