var should    = require('chai').should();
var myproject = require('../');

describe('Evented Adder', function() {
  describe('add()', function() {

    it('should emit result 3 when adding 1 and 2', function(done) {
      var adder = new myproject.EventedAdder();
      adder.on('result', function(result) {
      	result.should.equal(3);
      	done();
      });
      adder.add(1, 2);
    });

  });
});