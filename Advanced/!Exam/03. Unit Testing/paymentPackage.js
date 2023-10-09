class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20; // Default value
        this.active = true; // Default value
    }
    get name() {
        return this._name;
    }
    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }
    get value() {
        return this._value;
    }
    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }
    get VAT() {
        return this._VAT;
    }
    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }
    get active() {
        return this._active;
    }
    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }
    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`, `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}

const { assert, expect } = require('chai');

describe('test function', () => {
    // it('test', () => {
    //     let a = new PaymentPackage('Galia', 1500);
    //     assert.instanceOf(a, PaymentPackage, 'a is an instance of PaymentPackage');

    // })
    it('test', () => {
        let a = new PaymentPackage('Galia', 1500);
        assert.equal(a.name, 'Galia','1');
        assert.equal(a.value, 1500,'2');
        assert.equal(a.VAT, 20,'3');
        assert.equal(a.active, true,'4');

    })

    describe('test function', () => {
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            expect(() => { a.name = '' }).to.throw('Name must be a non-empty string');
        })
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            expect(() => { a.name = [''] }).to.throw('Name must be a non-empty string');
        })
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            expect(() => { a.name = 3 }).to.throw('Name must be a non-empty string');
        })
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            expect(a.name = 'Pesho').to.equal('Pesho');
        })
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            a.name = 'Pesho'
            expect(a.name).to.equal('Pesho');
        })
      
        
    })

    describe('test function', () => {
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            expect(() => { a.value = '3' }).to.throw('Value must be a non-negative number');
        })
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            expect(() => { a.value = -1 }).to.throw('Value must be a non-negative number');
        })
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            expect(() => { a.value = null }).to.throw('Value must be a non-negative number');
        })
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            expect(() => { a.value = [3] }).to.throw('Value must be a non-negative number');
        })
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            expect(a.value = 0).to.equal(0);
        })
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            expect(a.value = 1).to.equal(1);
        })
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            a.value = 1000
            expect(a.value).to.equal(1000);
        })
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            a.name = 'Ivan'
            a.value = 1000;
            a.value = 3000;
            expect(a.value).to.equal(3000);
        })

    })

    describe('test function', () => {
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            expect(() => { a.VAT = '3' }).to.throw('VAT must be a non-negative number');
        })
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            expect(() => { a.VAT = -1 }).to.throw('VAT must be a non-negative number');
        })
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            expect(() => { a.VAT = [1] }).to.throw('VAT must be a non-negative number');
        })
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            expect(a.VAT = 0).to.equal(0);
        })
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            expect(a.VAT = 30).to.equal(30);
        })
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            a.VAT = 1000;
            expect(a.VAT).to.equal(1000);
        })
    })

    describe('test function', () => {
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            expect(() => { a.active = '3' }).to.throw('Active status must be a boolean');
        })
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            expect(() => { a.active = 8 }).to.throw('Active status must be a boolean');
        })
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            expect(() => { a.active = [true] }).to.throw('Active status must be a boolean');
        })
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            expect(() => { a.active = undefined }).to.throw('Active status must be a boolean');
        })
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            expect(a.active = false).to.equal(false);
        })
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            expect(a.active = true).to.equal(true);
        })
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            a.active = true
            expect(a.active=false).to.equal(false);
        })
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            a.active = false
            expect(a.active = true).to.equal(true);
        })
    })

    describe('test function', () => {

        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            expect(a.toString()).to.equal(`Package: Galia\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`);
        })
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            a.active = false;
            expect(a.toString()).to.equal(`Package: Galia (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`);
        })
        it('test', () => {
            let a = new PaymentPackage('Galia', 1200);
            a.active = false;
            expect(a.toString()).to.equal(`Package: Galia (inactive)\n- Value (excl. VAT): 1200\n- Value (VAT 20%): 1440`);
        })
        it('test', () => {
            let a = new PaymentPackage('Galia', 1200);
            a.active = false;
            a.VAT = 50;
            expect(a.toString()).to.equal(`Package: Galia (inactive)\n- Value (excl. VAT): 1200\n- Value (VAT 50%): 1800`);
        })
        it('test', () => {
            let a = new PaymentPackage('Galia', 1500);
            a.VAT = 50;
            a.active = true;
            expect(a.toString()).to.equal(`Package: Galia\n- Value (excl. VAT): 1500\n- Value (VAT 50%): 2250`);
        })
        it('test', () => {
            let a = new PaymentPackage('Ivan', 100);
            a.name = 'Galia';
            a.value = 1500;
            a.VAT = 0;
            a.active = true;
            expect(a.toString()).to.equal(`Package: Galia\n- Value (excl. VAT): 1500\n- Value (VAT 0%): 1500`);
        })
    })
})