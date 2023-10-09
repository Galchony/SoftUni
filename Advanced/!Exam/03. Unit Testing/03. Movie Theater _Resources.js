const movieTheater = {
  ageRestrictions(movieRating) {
    switch (movieRating) {
      case "G":
        return "All ages admitted to watch the movie";
      case "PG":
        return "Parental guidance suggested! Some material may not be suitable for pre-teenagers";
      case "R":
        return "Restricted! Under 17 requires accompanying parent or adult guardian";
      case "NC-17":
        return "No one under 17 admitted to watch the movie";
      default:
        return "There are no age restrictions for this movie";
    }
  },
  moneySpent(tickets, food, drinks) {
    if (
      typeof tickets !== "number" ||
      !Array.isArray(food) ||
      !Array.isArray(drinks)
    ) {
      throw new Error("Invalid input");
    }

    let bill = 0;

    bill += tickets * 15;

    food.forEach((element) => {
      switch (element) {
        case "Nachos":
          bill += 6;
          break;
        case "Popcorn":
          bill += 4.5;
          break;
      }
    });

    drinks.forEach((element) => {
      switch (element) {
        case "Soda":
          bill += 2.5;
          break;
        case "Water":
          bill += 1.5;
          break;
      }
    });

    if (bill > 50) {
      bill -= bill * 0.2;
      return `The total cost for the purchase with applied discount is ${bill.toFixed(
        2
      )}`;
    } else {
      return `The total cost for the purchase is ${bill.toFixed(2)}`;
    }
  },
  reservation(rowsArray, neededSeatsCount) {
    if (!Array.isArray(rowsArray) || typeof neededSeatsCount !== "number") {
      throw new Error("Invalid input");
    }

    let availableRows = [];
    rowsArray.forEach((row) => {
      if (row.freeSeats >= neededSeatsCount) {
        availableRows.push(row.rowNumber);
      }
    });

    return Math.max(...availableRows);
  },
};


const { expect } = require('chai');
describe('test function movieTheater', () => {
  describe('test function ageRestrictions', () => {
    it('test', () => {
      expect(movieTheater.ageRestrictions('G')).to.equal('All ages admitted to watch the movie');
    })
    it('test', () => {
      expect(movieTheater.ageRestrictions('PG')).to.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers');
    })
    it('test', () => {
      expect(movieTheater.ageRestrictions('R')).to.equal('Restricted! Under 17 requires accompanying parent or adult guardian');
    })
    it('test', () => {
      expect(movieTheater.ageRestrictions('NC-17')).to.equal('No one under 17 admitted to watch the movie');
    })
    it('test', () => {
      expect(movieTheater.ageRestrictions('Galia')).to.equal('There are no age restrictions for this movie');
    })
    it('test', () => {
      expect(movieTheater.ageRestrictions('')).to.equal('There are no age restrictions for this movie');
    })
    it('test', () => {
      expect(movieTheater.ageRestrictions(3)).to.equal('There are no age restrictions for this movie');
    })
    it('test', () => {
      expect(movieTheater.ageRestrictions([])).to.equal('There are no age restrictions for this movie');
    })

  })

  describe('test function moneySpent', () => {
    it('test', () => {
      expect(() => { movieTheater.moneySpent('3', [], []) }).to.throw('Invalid input');
    })
    it('test', () => {
      expect(() => { movieTheater.moneySpent(3, 3, []) }).to.throw('Invalid input');
    })
    it('test', () => {
      expect(() => { movieTheater.moneySpent(3, [], 3) }).to.throw('Invalid input');
    })
    it('test', () => {
      expect(movieTheater.moneySpent(5, ['Nachos','Nachos'], [])).to.equal('The total cost for the purchase with applied discount is 69.60');
    })
    it('test', () => {
      expect(movieTheater.moneySpent(5, ['Popcorn','Popcorn'], [])).to.equal('The total cost for the purchase with applied discount is 67.20');
    })
    it('test', () => {
      expect(movieTheater.moneySpent(5, ['Popcorn','Nachos'], [])).to.equal('The total cost for the purchase with applied discount is 68.40');
    })
    it('test', () => {
      expect(movieTheater.moneySpent(2, ['Popcorn','Nachos'], [])).to.equal('The total cost for the purchase is 40.50');
    })
    it('test', () => {
      expect(movieTheater.moneySpent(2, ['Popcorn','Nachos'], ['Soda'])).to.equal('The total cost for the purchase is 43.00');
    })
    it('test', () => {
      expect(movieTheater.moneySpent(2, ['Popcorn','Nachos'], ['Water'])).to.equal('The total cost for the purchase is 42.00');
    })
    it('test', () => {
      expect(movieTheater.moneySpent(2, ['Popcorn','Nachos'], ['Soda','Water'])).to.equal('The total cost for the purchase is 44.50');
    })
    it('test', () => {
      expect(movieTheater.moneySpent(5, ['Popcorn','Nachos'], ['Soda','Water'])).to.equal('The total cost for the purchase with applied discount is 71.60');
    })
    it('test', () => {
      expect(movieTheater.moneySpent(3, [], ['Soda','Soda'])).to.equal('The total cost for the purchase is 50.00');
    })
   

  })

  describe('test function reservation', () => {
    it('test', () => {
      expect(() => { movieTheater.reservation(3, 3) }).to.throw('Invalid input');
    })
    it('test', () => {
      expect(() => { movieTheater.reservation([], '3') }).to.throw('Invalid input');
    })
    it('test', () => {
      expect(movieTheater.reservation([{freeSeats:3,rowNumber:3}], 3)).to.equal(3);
    })
    it('test', () => {
      expect(movieTheater.reservation([{freeSeats:3,rowNumber:3}], 2)).to.equal(3);
    })
    it('test', () => {
      expect(movieTheater.reservation([{freeSeats:3,rowNumber:3}], 4)).to.equal(-Infinity);
    })
    it('test', () => {
      expect(movieTheater.reservation([], 4)).to.equal(-Infinity);
    })
    it('test', () => {
      expect(movieTheater.reservation([], 0)).to.equal(-Infinity);
    })
    it('test', () => {
      expect(movieTheater.reservation([{freeSeats:3,rowNumber:3},{freeSeats:8,rowNumber:9}], 0)).to.equal(9);
    })
  })
})