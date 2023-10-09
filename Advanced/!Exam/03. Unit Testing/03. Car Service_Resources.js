const carService = {
  isItExpensive(issue) {
    if (issue === "Engine" || issue === "Transmission") {
      return `The issue with the car is more severe and it will cost more money`;
    } else {
      return `The overall price will be a bit cheaper`;
    }
  },
  discount(numberOfParts, totalPrice) {
    if (typeof numberOfParts !== "number" || typeof totalPrice !== "number") {
      throw new Error("Invalid input");
    }

    let discountPercentage = 0;

    if (numberOfParts > 2 && numberOfParts <= 7) {
      discountPercentage = 15;
    } else if (numberOfParts > 7) {
      discountPercentage = 30;
    }

    let result = (discountPercentage / 100) * totalPrice;

    if (numberOfParts <= 2) {
      return "You cannot apply a discount";
    } else {
      return `Discount applied! You saved ${result}$`;
    }
  },
  partsToBuy(partsCatalog, neededParts) {
    let totalSum = 0;

    if (!Array.isArray(partsCatalog) || !Array.isArray(neededParts)) {
      throw new Error("Invalid input");
    }
    neededParts.forEach((neededPart) => {
      partsCatalog.map((obj) => {
        if (obj.part === neededPart) {
          totalSum += obj.price;
        }
      });
    });

    return totalSum;
  },
};


const { expect } = require('chai');

describe('test function carService', () => {

  describe('test function isItExpensive', () => {
    it('test', () => {
      expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
    })
    it('test', () => {
      expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money');
    })
    it('test', () => {
      expect(carService.isItExpensive('')).to.equal('The overall price will be a bit cheaper');
    })
    it('test', () => {
      expect(carService.isItExpensive(4)).to.equal('The overall price will be a bit cheaper');
    })
    it('test', () => {
      expect(carService.isItExpensive('Galia')).to.equal('The overall price will be a bit cheaper');
    })
  })

  describe('test function discount', () => {
    it('test', () => {
      expect(() => { carService.discount('3', 3) }).to.throw('Invalid input');
    })
    it('test', () => {
      expect(() => { carService.discount(3, '3') }).to.throw('Invalid input');
    })
    it('test', () => {
      expect(carService.discount(2, 4)).to.equal('You cannot apply a discount');
    })
    it('test', () => {
      expect(carService.discount(-1, 4)).to.equal('You cannot apply a discount');
    })
    it('test', () => {
      expect(carService.discount(0, 4)).to.equal('You cannot apply a discount');
    })
    it('test', () => {
      expect(carService.discount(3, 4)).to.equal('Discount applied! You saved 0.6$');
    })
    it('test', () => {
      expect(carService.discount(7, 4)).to.equal('Discount applied! You saved 0.6$');
    })
    it('test', () => {
      expect(carService.discount(8, 4)).to.equal('Discount applied! You saved 1.2$');
    })
    it('test', () => {
      expect(carService.discount(8, 0)).to.equal('Discount applied! You saved 0$');
    })

  })

  describe('test function partsToBuy', () => {
    it('test', () => {
      expect(() => { carService.partsToBuy('3', []) }).to.throw('Invalid input');
    })
    it('test', () => {
      expect(() => { carService.partsToBuy([], 3) }).to.throw('Invalid input');
    })
    it('test', () => {
      expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"])).to.equal(145);
    })
    it('test', () => {
      expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], [])).to.equal(0);
    })
    it('test', () => {
      expect(carService.partsToBuy([{  }], [])).to.equal(0);
    })

  })
})

