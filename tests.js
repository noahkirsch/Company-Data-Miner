let companySearch = require('./companySearch');
let assert = require('assert');
let fs = require('fs');

const companyData = JSON.parse(fs.readFileSync('testData.json', 'utf8'));

describe('companySearch', function() {

	describe('#router()', function() {
    it('should return null and print an error when an invalid argument is provided with the find_companies_between_size command', function() {
      assert.equal(companySearch.router(companyData, 'find_companies_between_size', '100-528'), null);
    });
    it('should return null and print an error when an invalid argument is provided with the find_type command', function() {
      assert.equal(companySearch.router(companyData, 'find_type', 'Agriculture'), null);
    });
    it('should return null and print an error when an invalid command is provided', function() {
      assert.equal(companySearch.router(companyData, 'invalidCommand', '100-528'), null);
    });
  });

  describe('#locate()', function() {
    it('should return 2 results when the command is locate and the argument is CA', function() {
      assert.equal(companySearch.locate(companyData, 'CA').length, 2);
    });
    it('should return 0 when no results are found', function() {
      assert.equal(companySearch.locate(companyData, 'IA').length, 0);
    });
  });

  describe('#find_before()', function() {
    it('should return 7 results when the command is find_before and the argument is 2009', function() {
      assert.equal(companySearch.find_before(companyData, 2009).length, 7);
    });
    it('should return 0 when no results are found', function() {
      assert.equal(companySearch.find_before(companyData, 1800).length, 0);
    });
  });

  describe('#find_after()', function() {
    it('should return 5 results when the command is find_after and the argument is 2000', function() {
      assert.equal(companySearch.find_after(companyData, 1999).length, 5);
    });
    it('should return 0 when no results are found', function() {
      assert.equal(companySearch.find_after(companyData, 2018).length, 0);
    });
  });

  describe('#find_companies_between_size()', function() {
    it('should return 1 results when the command is find_comapnies_between_size and the argument is 10,001+', function() {
      assert.equal(companySearch.find_companies_between_size(companyData, '10,001+').length, 1);
    });
    it('should return 0 when no results are found', function() {
      assert.equal(companySearch.find_companies_between_size(companyData, '201-500').length, 0);
    });
  });

  describe('#find_type()', function() {
    it('should return 3 results when the command is find_type and the argument is Data/Technology', function() {
      assert.equal(companySearch.find_type(companyData, 'Data/Technology').length, 3);
    });
    it('should return 0 when no results are found', function() {
      assert.equal(companySearch.find_type(companyData, 'N/A').length, 0);
    });
  });
});
