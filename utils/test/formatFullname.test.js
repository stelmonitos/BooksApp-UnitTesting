const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('formatFullname', () => {
    it('should return an error if there is empty argument', () =>{
        expect(formatFullname('')).to.equal('Error');
        expect(formatFullname(' ')).to.equal('Error');
    })
    it('should return an error if "fullName" is not a string', () => {
        expect(formatFullname(3)).to.equal('Error')
        expect(formatFullname({})).to.equal('Error')
        expect(formatFullname([])).to.equal('Error')
        expect(formatFullname(function () {})).to.equal('Error')
        expect(formatFullname(undefined)).to.equal('Error')
    })
    it('should return an error if wrong data form', () => {
        expect(formatFullname('Jhon')).to.equal('Error')
        expect(formatFullname('Jhon Doe Test')).to.equal('Error')
    })
})