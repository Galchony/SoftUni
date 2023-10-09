const companyAdministration = {

    hiringEmployee(name, position, yearsExperience) {
        if (position == "Programmer") {
            if (yearsExperience >= 3) {
                return `${name} was successfully hired for the position ${position}.`;
            } else {
                return `${name} is not approved for this position.`;
            }
        }
        throw new Error(`We are not looking for workers for this position.`);
    },
    calculateSalary(hours) {

        let payPerHour = 15;
        let totalAmount = payPerHour * hours;

        if (typeof hours !== "number" || hours < 0) {
            throw new Error("Invalid hours");
        } else if (hours > 160) {
            totalAmount += 1000;
        }
        return totalAmount;
    },
    firedEmployee(employees, index) {

        let result = [];

        if (!Array.isArray(employees) || !Number.isInteger(index) || index < 0 || index >= employees.length) {
            throw new Error("Invalid input");
        }
        for (let i = 0; i < employees.length; i++) {
            if (i !== index) {
                result.push(employees[i]);
            }
        }
        return result.join(", ");
    }

}

const { expect } = require('chai');

describe('test function companyAdministration', () => {

    describe('test function hiringEmployee', () => {
        it('test', () => {
            expect(() => { companyAdministration.hiringEmployee('Ivan', 'HR', 3) }).to.throw('We are not looking for workers for this position.');
        })
        it('test', () => {
            expect(() => { companyAdministration.hiringEmployee('Ivan', 'CEO', 3) }).to.throw('We are not looking for workers for this position.');
        })
        it('test', () => {
            expect(() => { companyAdministration.hiringEmployee('Ivan', '', 3) }).to.throw('We are not looking for workers for this position.');
        })
        it('test', () => {
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 3)).to.equal('Ivan was successfully hired for the position Programmer.');
        })
        it('test', () => {
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 8)).to.equal('Ivan was successfully hired for the position Programmer.');
        })
        it('test', () => {
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 2)).to.equal('Ivan is not approved for this position.');
        })
        it('test', () => {
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 0)).to.equal('Ivan is not approved for this position.');
        })
        it('test', () => {
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 4)).to.equal('Ivan was successfully hired for the position Programmer.');
        })
        it('test', () => {
            expect(companyAdministration.hiringEmployee('', 'Programmer', 0)).to.equal(' is not approved for this position.');
        })
        it('test', () => {
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', -1)).to.equal('Ivan is not approved for this position.');
        })
    })

    describe('test function calculateSalary', () => {
        it('test', () => {
            expect(() => { companyAdministration.calculateSalary('3') }).to.throw('Invalid hours');
        })
        it('test', () => {
            expect(() => { companyAdministration.calculateSalary(-3) }).to.throw('Invalid hours');
        })
        it('test', () => {
            expect(() => { companyAdministration.calculateSalary('string') }).to.throw('Invalid hours');
        })
        it('test', () => {
            expect(() => { companyAdministration.calculateSalary(null) }).to.throw('Invalid hours');
        })
        it('test', () => {
            expect(() => { companyAdministration.calculateSalary(undefined) }).to.throw('Invalid hours');
        })
        it('test', () => {
            expect(companyAdministration.calculateSalary(3)).to.equal(45);
        })
        it('test', () => {
            expect(companyAdministration.calculateSalary(0)).to.equal(0);
        })
        it('test', () => {
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
        })
        it('test', () => {
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
        })
        it('test', () => {
            expect(companyAdministration.calculateSalary(180)).to.equal(3700);
        })
        it('test', () => {
            expect(companyAdministration.calculateSalary(161.2)).to.equal(3418);
        })
        it('test', () => {
            expect(companyAdministration.calculateSalary(1)).to.equal(15);
        })
        it('test', () => {
            expect(companyAdministration.calculateSalary(NaN)).to.be.NaN;
        })
       
    })

    describe('test function firedEmployee', () => {
        it('test', () => {
            expect(() => { companyAdministration.firedEmployee('3', 3) }).to.throw('Invalid input');
        })
        it('test', () => {
            expect(() => { companyAdministration.firedEmployee('3', 'str') }).to.throw('Invalid input');
        })
        it('test', () => {
            expect(() => { companyAdministration.firedEmployee('3', null) }).to.throw('Invalid input');
        })
        it('test', () => {
            expect(() => { companyAdministration.firedEmployee({}, 3) }).to.throw('Invalid input');
        })
        it('test', () => {
            expect(() => { companyAdministration.firedEmployee(3, 3) }).to.throw('Invalid input');
        })
        it('test', () => {
            expect(() => { companyAdministration.firedEmployee([], 3) }).to.throw('Invalid input');
        })
        it('test', () => {
            expect(() => { companyAdministration.firedEmployee([], 0) }).to.throw('Invalid input');
        })
        it('test', () => {
            expect(() => { companyAdministration.firedEmployee(["Petar", "Ivan", "George"], '8') }).to.throw('Invalid input');
        })
        it('test', () => {
            expect(() => { companyAdministration.firedEmployee(["Petar"], 1) }).to.throw('Invalid input');
        })
        it('test', () => {
            expect(() => { companyAdministration.firedEmployee(["Petar"], 3) }).to.throw('Invalid input');
        })
        it('test', () => {
            expect(() => { companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1) }).to.throw('Invalid input');
        })
        it('test', () => {
            expect(() => { companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 5.2) }).to.throw('Invalid input');
        })
        it('test', () => {
            expect(() => { companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 3) }).to.throw('Invalid input');
        })
        it('test', () => {
            expect(() => { companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 10) }).to.throw('Invalid input');
        })
        it('test', () => {
            expect(() => { companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 4) }).to.throw('Invalid input');
        })
        it('test', () => {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 2)).to.equal('Petar, Ivan');
        })
        it('test', () => {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1)).to.equal('Petar, George');
        })
        it('test', () => {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 0)).to.equal('Ivan, George');
        })
        it('test', () => {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George", "George", "George"], 4)).to.equal('Petar, Ivan, George, George');
        })
        it('test', () => {
            expect(companyAdministration.firedEmployee(["Petar"], 0)).to.equal('');
        })
        it('test', () => {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan"], 0)).to.equal('Ivan');
        })
        it('test', () => {
            expect(companyAdministration.firedEmployee(["", ""], 1)).to.equal('');
        })

    })
})