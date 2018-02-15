var chai = require("chai");
var should = chai.should();
chai.use(require('chai-properties'));

const enums = require('../lib/enums');
var Enum = require('enum');

describe('enums.sBlockTypes', ()=>{
    var sBlockTypes= enums.sBlockTypes;
    it('should return an instance of enum', ()=>{
        sBlockTypes.should.be.an.instanceof(Enum);
    });  
    it('should not be empty', () => {
        sBlockTypes.enums.should.not.be.empty;
    });
});
describe('enums.id_types', ()=>{
    var result= enums.id_types;
    it('should return an instance of enum', ()=>{
        result.should.be.an.instanceof(Enum);
    });  
    it('should not be empty', () => {
        result.enums.should.not.be.empty;
    });
});
describe('enums.efm_produkt',()=>{
    it('should return an object', ()=>{
        enums.efm_produkt(6263, 1005).should.be.a('object');
    });
    it('should have correct properties',()=>{
        enums.efm_produkt(6263, 1005).should.have.properties({
            kvp_organisations_id: "6263 (DB Regio Zentrale)",
            produkt_nr: "1005 (Bayern-Ticket)"
        });
    });
    it('should ignore unknow products',()=>{
        enums.efm_produkt(6263, 1).should.have.properties({
            kvp_organisations_id: "6263 (DB Regio Zentrale)",
            produkt_nr: "1"
        });
    });
    it('should ignore unknow organisations',()=>{
        enums.efm_produkt(0815, 1005).should.have.properties({
            kvp_organisations_id: "815",
            produkt_nr: "1005"
        });
    });
});

describe('enums.org_id', ()=>{
    const result = enums.org_id(6262);
    it('should return a string with the correct value', ()=>{
        result.should.be.equal("6262 (DB Fernverkehr)").and.be.a('string');
    });
    it('should ignore unknown values', ()=>{
        enums.org_id(0815).should.be.equal("815").and.be.a('string');
    });
})

describe('enums.tarifpunkt',()=>{
    it('should return a string', ()=>{
        enums.tarifpunkt(6263, 8000284).should.be.a('string');
    });
    it('should have correct properties',()=>{
        enums.tarifpunkt(6263, 8000284).should.be.equal("8000284 (Nürnberg Hbf)");
    });
    it('should ignore unknow stops',()=>{
        enums.tarifpunkt(6263, 1).should.be.equal("1");
    });
    it('should ignore unknow organisations',()=>{
        enums.tarifpunkt(1, 1).should.be.equal("1");
    });
});
