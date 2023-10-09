const { expect } = require('chai');
const weddingDay = require('./weddingDay');

describe("test weddingDay function", function () {
    describe("test pickVenue function", function () {
        it("test if type of param-capacity is a str", function () {
            expect(() => { weddingDay.pickVenue('2', 3, 'Varna') }).to.throw("Invalid Information!");
        });
        it("test if type of param-pricePerGuest is a str", function () {
            expect(() => { weddingDay.pickVenue(2, '3', 'Varna') }).to.throw("Invalid Information!");
        });
        it("test if type of params-capacity and pricePerGuest is a str", function () {
            expect(() => { weddingDay.pickVenue('2', '3', 'Varna') }).to.throw("Invalid Information!");
        });
        it("test if type of params-location is not a str", function () {
            expect(() => { weddingDay.pickVenue(2, 3, 4) }).to.throw("Invalid Information!");
        });
        it("test if param-location is empty str", function () {
            expect(() => { weddingDay.pickVenue(2, 3, '') }).to.throw("Invalid Information!");
        });
        it("test if params-capacity is 150", function () {
            expect(weddingDay.pickVenue(150, 3, 'Varna')).to.equal("This venue meets the requirements, with capacity of 150 guests and 3$ cover.");
        });
        it("test if capacity is 150 and pricePerGuest is 120", function () {
            expect(weddingDay.pickVenue(150, 120, 'Varna')).to.equal("This venue meets the requirements, with capacity of 150 guests and 120$ cover.");
        });
        it("test if capacity < 150 && pricePerGuest > 120", function () {
            expect(weddingDay.pickVenue(149, 121, 'Varna')).to.equal("This venue does not meet your requirements!");
        });
        it("test if param-location is not 'Varna", function () {
            expect(() => { weddingDay.pickVenue(2, 3, 'London') }).to.throw("The location of this venue is not in the correct area!");
        });
    });

    describe("test otherSpendings function", function () {
        it("test if type of param-weddingDecoration is not arr", function () {
            expect(() => { weddingDay.otherSpendings('2', [], true) }).to.throw("Invalid Information!");
        });
        it("test if type of param-photography is not arr", function () {
            expect(() => { weddingDay.otherSpendings([], 3, true) }).to.throw("Invalid Information!");
        });
        it("test if type of param-discount is not boolean", function () {
            expect(() => { weddingDay.otherSpendings([], [], 'Varna') }).to.throw("Invalid Information!");
        });
        it("test otherSpendings", function () {
            expect(weddingDay.otherSpendings([], [], true)).to.equal("You spend 0$ for wedding decoration and photography with 15% discount!");
            expect(weddingDay.otherSpendings([], [], false)).to.equal("You spend 0$ for wedding decoration and photography!");

        });
        it("test otherSpendings", function () {
            expect(weddingDay.otherSpendings(['flowers'], ['pictures'], false)).to.equal("You spend 1200$ for wedding decoration and photography!");
            expect(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['video'], false)).to.equal("You spend 1700$ for wedding decoration and photography!");

        });
        it("test otherSpendings", function () {
            expect(weddingDay.otherSpendings(['flowers'], ['pictures'], true)).to.equal("You spend 1020$ for wedding decoration and photography with 15% discount!");
            expect(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['video'], true)).to.equal("You spend 1445$ for wedding decoration and photography with 15% discount!");

        });
    });
    describe("test tableDistribution function", function () {
        it("test", function () {
            expect(() => { weddingDay.tableDistribution('1', 1) }).to.throw("Invalid Information!");
        });
        it("test", function () {
            expect(() => { weddingDay.tableDistribution(1, '3') }).to.throw("Invalid Information!");
        });
        it("test", function () {
            expect(() => { weddingDay.tableDistribution(0, 2) }).to.throw("Invalid Information!");
        });
        it("test", function () {
            expect(() => { weddingDay.tableDistribution(2, 0) }).to.throw("Invalid Information!");
        });
        it("test", function () {
            expect(() => { weddingDay.tableDistribution(-1, 1) }).to.throw("Invalid Information!");
        });
        it("test", function () {
            expect(() => { weddingDay.tableDistribution(1, -1) }).to.throw("Invalid Information!");
        });
        it("test otherSpendings", function () {
            expect(weddingDay.tableDistribution(12,6)).to.equal(`There is only 2 people on every table, you can join some tables.`);
            expect(weddingDay.tableDistribution(20, 2)).to.equal(`You have 2 tables with 10 guests on table.`);
            expect(weddingDay.tableDistribution(13, 2)).to.equal(`You have 2 tables with 7 guests on table.`);

        });
        it("test otherSpendings", function () {
            expect(weddingDay.tableDistribution(36, 6)).to.equal(`You have 6 tables with 6 guests on table.`);

        });
        
    });
});
