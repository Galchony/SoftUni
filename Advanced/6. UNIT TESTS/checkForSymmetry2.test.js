const { expect } = require('chai');
const isSymmetric = require('./checkForSymmetry2');

describe('test func isSymmetric', () => {
    it('test if input is str', () => {
        expect(isSymmetric('galia')).to.equal(false);
    })
    it('test if input is num', () => {
        expect(isSymmetric(123)).to.equal(false);
    })
    it('test if input is obj', () => {
        expect(isSymmetric({a:2})).to.equal(false);
    })
    it('test if input is null', () => {
        expect(isSymmetric(null)).to.equal(false);
    })
    it('test if input is undefined', () => {
        expect(isSymmetric(undefined)).to.equal(false);
    })
    it('test if input is NaN', () => {
        expect(isSymmetric(NaN)).to.equal(false);
    })
    it('test if input is two params', () => {
        expect(isSymmetric(3,3)).to.equal(false);
    })
    it('test if input is non-symmetric arr with nums', () => {
        expect(isSymmetric([1,2,3])).to.equal(false);
    })
    it('test if input is non-symmetric arr with strs', () => {
        expect(isSymmetric(['galia','love'])).to.equal(false);
    })
    it('test if input is symmetric arr with strs', () => {
        expect(isSymmetric(['galia','love','galia'])).to.equal(true);
    })
    it('test if input is empty arr', () => {
        expect(isSymmetric([])).to.equal(true);
    })
    it('test if input is symmetric arr with same nums', () => {
        expect(isSymmetric([1,1,1,1])).to.equal(true);
    })
    it('test if input is symmetric arr with diff nums', () => {
        expect(isSymmetric([1,2,3,2,1])).to.equal(true);
    })
    it('test if input is symmetric arr with one num', () => {
        expect(isSymmetric([0])).to.equal(true);
    })
    it('test if input is symmetric arr with two nums', () => {
        expect(isSymmetric([2,2])).to.equal(true);
    })
    it('test if input is symmetric arr with one str', () => {
        expect(isSymmetric(['galia'])).to.equal(true);
    })
    it('test if input is symmetric arr with a few str-s', () => {
        expect(isSymmetric(['galia','galia'])).to.equal(true);
    })
    it('test if input is symmetric arr with empty str', () => {
        expect(isSymmetric([''])).to.equal(true);
    })
    it('test if input is symmetric arr with symmetric str and nums', () => {
        expect(isSymmetric(['galia',3,'galia'])).to.equal(true);
    })
    it('test if input is symmetric arr with str and nums', () => {
        expect(isSymmetric(['galia',3])).to.equal(false);
    })
    it('test if input is symmetric arr with NaN', () => {
        expect(isSymmetric([NaN])).to.equal(true);
    })
})