var chai = require('chai');
var expect = chai.expect;
var response = require('../src/logic/response');

describe("Response", function() {
    it('on("/") should return status "ok" and no errors', function() {
        response.on('/', function(result) {
            expect(result.status).to.equal("ok");
        });
    });
});
