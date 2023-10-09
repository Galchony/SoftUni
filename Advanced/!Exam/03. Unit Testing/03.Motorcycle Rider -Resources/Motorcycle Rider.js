const motorcycleRider = {
  licenseRestriction(category) {
    if (category === "AM") {
      return 'Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.'
    } else if (category === "A1") {
      return 'Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.'
    } else if (category === "A2") {
      return 'Motorcycles with maximum power of 35KW. and the minimum age is 18.'
    } else if (category === "A") {
      return 'No motorcycle restrictions, and the minimum age is 24.'
    } else {
      throw new Error("Invalid Information!");
    }
  },
  motorcycleShowroom(engineVolume, maximumEngineVolume) {
    if (!Array.isArray(engineVolume) || typeof maximumEngineVolume !== "number" || engineVolume.length < 1 || maximumEngineVolume < 50) {
      throw new Error("Invalid Information!");
    }
    let availableBikes = [];
    engineVolume.forEach((engine) => {

      if (engine <= maximumEngineVolume && engine >= 50) {
        availableBikes.push(engine);
      }
    });
    return `There are ${availableBikes.length} available motorcycles matching your criteria!`;
  },
  otherSpendings(equipment, consumables, discount) {
    if (
      !Array.isArray(equipment) ||
      !Array.isArray(consumables) ||
      typeof discount !== "boolean"
    ) {
      throw new Error("Invalid Information!");
    }
    let totalPrice = 0;

    equipment.forEach((element) => {
      if (element === "helmet") {
        totalPrice += 200
      } else if (element === "jacked") {
        totalPrice += 300
      }
    });

    consumables.forEach((element) => {
      if (element === "engine oil") {
        totalPrice += 70
      } else if (element === "oil filter") {
        totalPrice += 30
      }
    });
    if (discount) {
      totalPrice = totalPrice * 0.9;
      return `You spend $${totalPrice.toFixed(2)} for equipment and consumables with 10% discount!`
    } else {
      return `You spend $${totalPrice.toFixed(2)} for equipment and consumables!`
    }

  }
};

let { expect } = require('chai');
describe('test motorcycleRider func', () => {

  describe('test licenseRestriction func', () => {
    it('test', () => {
      expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
    })
    it('test', () => {
      expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
    })
    it('test', () => {
      expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.')
    })
    it('test', () => {
      expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.');
    })
    it('test', () => {
      expect(() => { motorcycleRider.licenseRestriction('B') }).to.throw('Invalid Information!');
    })
    it('test', () => {
      expect(() => { motorcycleRider.licenseRestriction('') }).to.throw('Invalid Information!');
    })
    it('test', () => {
      expect(() => { motorcycleRider.licenseRestriction(3) }).to.throw('Invalid Information!');
    })
  })

  describe('test motorcycleShowroom func', () => {
    it('test', () => {
      expect(() => { motorcycleRider.motorcycleShowroom(3, 60) }).to.throw('Invalid Information!');
    })
    it('test', () => {
      expect(() => { motorcycleRider.motorcycleShowroom([1, 2, 3], 'str') }).to.throw('Invalid Information!');
    })
    it('test', () => {
      expect(() => { motorcycleRider.motorcycleShowroom([], 60) }).to.throw('Invalid Information!');
    })
    it('test', () => {
      expect(() => { motorcycleRider.motorcycleShowroom([1, 2, 3], 40) }).to.throw('Invalid Information!');
    })
    it('test', () => {
      expect(motorcycleRider.motorcycleShowroom([1, 2, 3], 50)).to.equal('There are 0 available motorcycles matching your criteria!');
    })
    it('test', () => {
      expect(motorcycleRider.motorcycleShowroom([50, 50, 50], 50)).to.equal('There are 3 available motorcycles matching your criteria!');
    })
    it('test', () => {
      expect(motorcycleRider.motorcycleShowroom([20, 88, 10], 100)).to.equal('There are 1 available motorcycles matching your criteria!');
    })
  })

  describe('test otherSpendings func', () => {
    it('test', () => {
      expect(() => { motorcycleRider.otherSpendings(3, [60], true) }).to.throw('Invalid Information!');
    })
    it('test', () => {
      expect(() => { motorcycleRider.otherSpendings([3], 60, true) }).to.throw('Invalid Information!');
    })
    it('test', () => {
      expect(() => { motorcycleRider.otherSpendings([3], [60], 43) }).to.throw('Invalid Information!');
    })
    it('test', () => {
      expect(motorcycleRider.otherSpendings(['helmet','helmet'], [], true)).to.equal('You spend $360.00 for equipment and consumables with 10% discount!');
    })
    it('test', () => {
      expect(motorcycleRider.otherSpendings(['jacked','jacked'], [], true)).to.equal('You spend $540.00 for equipment and consumables with 10% discount!');
    })
    it('test', () => {
      expect(motorcycleRider.otherSpendings(['helmet','jacked'], [], false)).to.equal('You spend $500.00 for equipment and consumables!');
    })
    it('test', () => {
      expect(motorcycleRider.otherSpendings(['helmet','jacked'], ['engine oil'], false)).to.equal('You spend $570.00 for equipment and consumables!');
    })
    it('test', () => {
      expect(motorcycleRider.otherSpendings(['helmet','jacked'], ['oil filter'], false)).to.equal('You spend $530.00 for equipment and consumables!');
    })
    it('test', () => {
      expect(motorcycleRider.otherSpendings(['helmet','jacked'], ['engine oil','oil filter'], false)).to.equal('You spend $600.00 for equipment and consumables!');
    })
    it('test', () => {
      expect(motorcycleRider.otherSpendings(['helmet','jacked'], ['engine oil','oil filter'], true)).to.equal('You spend $540.00 for equipment and consumables with 10% discount!');
    })
  })

})