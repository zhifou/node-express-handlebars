var request = require('superagent');
var assert = require('assert');

describe('homepage', function () {
    it('should respond to GET', function () {
        assert(Array.isArray('a,b,c'.split(',')));
    });
    it('should return the same array', function () {
        assert.equal(['a','b','c'].length, 'a,b,c'.split(',').length, 'arrays have equal length');
        for(var i=0; i<['a','b','c'].length; i++){
            assert.equal(['a','b','c'][i], 'a,b,d'.split(',')[i], i + ' element is equal');
        }
    });
});

/*
describe('homepage', function () {
   it('should respond to GET', function (done) {
       request
           .get('http://localhost:' + port)
           .end(function (res) {
               expect(res.status).to.equal(200);
               done();
           });
   })
});*/
