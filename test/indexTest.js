var chai = require('chai');
var should = chai.should();
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const main = require('../index');

describe('index.js', () => {
    describe('index.readBarcode', () =>{
        //const dummy = 'test/images/barcode-dummy.png';
        const dummy = 'test/images/barcode-dummy2.png';
        const false_dummy = 'test/images/barcode dummy.png';
        it('should return an object on sucess', ()=>{
            return main.readBarcode(dummy).should.eventually.be.an('object');
        });
        it('should eventually be resolved', ()=>{
            return main.readBarcode(dummy).should.eventually.be.fulfilled;
        });
        it('should reject if file not found', () =>{
            return main.readBarcode(false_dummy).should.be.rejected;
        });
    });
});
