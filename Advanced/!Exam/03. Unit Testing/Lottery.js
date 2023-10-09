const lottery = {
  buyLotteryTicket(ticketPrice, ticketCount, buy) {
    if (buy === false) {
      throw new Error("Unable to buy lottery ticket!");
    } else {
      if (
        ticketPrice <= 0 ||
        ticketCount < 1 ||
        typeof ticketPrice !== "number" ||
        typeof ticketCount !== "number" ||
        typeof buy !== "boolean"
      ) {
        throw new Error("Invalid input!");
      } else {
        let totalPrice = ticketPrice * ticketCount;
        return `You bought ${ticketCount} tickets for ${totalPrice}$.`;
      }
    }
  },
  checkTicket(ticketNumbers, luckyNumbers) {
    if (
      !Array.isArray(ticketNumbers) ||
      !Array.isArray(luckyNumbers) ||
      ticketNumbers.length !== 6 ||
      luckyNumbers.length !== 6
    ) {
      throw new Error("Invalid input!");
    }

    const uniqueTicketNumbers = ticketNumbers.filter(
      (number, index, array) => array.indexOf(number) === index
    );
    let winningNumbers = 0;

    for (const number of uniqueTicketNumbers) {
      if (luckyNumbers.includes(number)) {
        winningNumbers++;
      }
    }

    if (winningNumbers >= 3 && winningNumbers < 6) {
      return "Congratulations you win, check your reward!";
    } else if (winningNumbers === 6) {
      return "You win the JACKPOT!!!";
    }
  }
  ,
  secondChance(ticketID, secondChanceWinningIDs) {
    if (typeof ticketID !== "number" || !Array.isArray(secondChanceWinningIDs)) {
      throw new Error("Invalid input!");
    }
    if (secondChanceWinningIDs.includes(ticketID)) {
      return "You win our second chance prize!";
    } else {
      return "Sorry, your ticket didn't win!";
    }
  },
};


const { expect } = require('chai');

describe('test function lottery', () => {

  describe('test function buyLotteryTicket', () => {
    it('test', () => {
      expect(() => { lottery.buyLotteryTicket(10, 5, false) }).to.throw('Unable to buy lottery ticket!');
    })
    it('test', () => {
      expect(() => { lottery.buyLotteryTicket(10, 5, 5) }).to.throw('Invalid input!');
    })
    it('test', () => {
      expect(() => { lottery.buyLotteryTicket(10, 5, 'galia') }).to.throw('Invalid input!');
    })
    it('test', () => {
      expect(() => { lottery.buyLotteryTicket(0, 5, true) }).to.throw('Invalid input!');
    })
    it('test', () => {
      expect(() => { lottery.buyLotteryTicket(-1, 5, true) }).to.throw('Invalid input!');
    })
    it('test', () => {
      expect(() => { lottery.buyLotteryTicket('galia', 5, true) }).to.throw('Invalid input!');
    })
    it('test', () => {
      expect(() => { lottery.buyLotteryTicket(10, 0, true) }).to.throw('Invalid input!');
    })
    it('test', () => {
      expect(() => { lottery.buyLotteryTicket(10, -5, true) }).to.throw('Invalid input!');
    })
    it('test', () => {
      expect(() => { lottery.buyLotteryTicket(10, 'galia', true) }).to.throw('Invalid input!');
    })
    it('test', () => {
      expect(() => { lottery.buyLotteryTicket([10], [5], true) }).to.throw('Invalid input!');
    })
    it('test', () => {
      expect(lottery.buyLotteryTicket(10, 5, true)).to.equal('You bought 5 tickets for 50$.');
    })
    it('test', () => {
      expect(lottery.buyLotteryTicket(1, 1, true)).to.equal('You bought 1 tickets for 1$.');
    })
  })

  describe('test function checkTicket', () => {
    it('test', () => {
      expect(() => { lottery.checkTicket(10,5) }).to.throw('Invalid input!');
    })
    it('test', () => {
      expect(() => { lottery.checkTicket('10','5') }).to.throw('Invalid input!');
    })
    it('test', () => {
      expect(() => { lottery.checkTicket([34,12,6,3],[3,8,1,5]) }).to.throw('Invalid input!');
    })
    it('test', () => {
      expect(() => { lottery.checkTicket([34,12,6,3,1,2,4],[3,8,1,2,3,4,5,6]) }).to.throw('Invalid input!');
    })
    it('test', () => {
      expect(() => { lottery.checkTicket([],[]) }).to.throw('Invalid input!');
    })
    it('test', () => {
      expect( lottery.checkTicket([0,1,2,3,4,5],[0,1,2,3,4,5])).to.equal('You win the JACKPOT!!!');
    })
    it('test', () => {
      expect( lottery.checkTicket([0,1,2,3,4,5],[1,2,3,0,4,5])).to.equal('You win the JACKPOT!!!');
    })
    it('test', () => {
      expect( lottery.checkTicket([22,1,2,3,4,5],[1,2,3,0,4,5])).to.equal('Congratulations you win, check your reward!');
    })
    it('test', () => {
      expect( lottery.checkTicket([0,1,2,3,4,5],[0,15,2,3,4,5])).to.equal('Congratulations you win, check your reward!');
    })
    it('test', () => {
      expect( lottery.checkTicket([0,1,2,33,42,52],[0,1,2,3,4,5])).to.equal('Congratulations you win, check your reward!');
    })
    it('test', () => {
      expect( lottery.checkTicket([0,12,22,33,42,52],[0,1,2,3,4,5])).to.equal(undefined);
    })
    it('test', () => {
      expect( lottery.checkTicket([0,12,22,33,42,52],[0,1,2,3,4,5])).to.not.equal('Congratulations you win, check your reward!');
    })
    
  })

  describe('test function secondChance', () => {
    it('test', () => {
      expect(() => { lottery.secondChance('10',[5]) }).to.throw('Invalid input!');
    })
    it('test', () => {
      expect(() => { lottery.secondChance([10],[5]) }).to.throw('Invalid input!');
    })
    it('test', () => {
      expect(() => { lottery.secondChance(10,10) }).to.throw('Invalid input!');
    })
    it('test', () => {
      expect(() => { lottery.secondChance(10,'10') }).to.throw('Invalid input!');
    })
    it('test', () => {
      expect(lottery.secondChance(10,[5]) ).to.equal("Sorry, your ticket didn't win!");
    })
    it('test', () => {
      expect(lottery.secondChance(10,[3,12,45]) ).to.equal("Sorry, your ticket didn't win!");
    })
    it('test', () => {
      expect(lottery.secondChance(10,[]) ).to.equal("Sorry, your ticket didn't win!");
    })
    it('test', () => {
      expect(lottery.secondChance(10,[10,5,8]) ).to.equal("You win our second chance prize!");
    })
    it('test', () => {
      expect(lottery.secondChance(10,[10]) ).to.equal("You win our second chance prize!");
    })
  })
})