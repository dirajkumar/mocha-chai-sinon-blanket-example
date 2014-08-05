var events = require('events');
var util   = require('util');

var Adder = exports.Adder = function() {
  events.EventEmitter.call(this);
};
util.inherits(Adder, events.EventEmitter);

Adder.prototype.add = function(a, b) {
  this.emit('result', a + b);
};

Adder.prototype.sub = function(a, b) {
  this.emit('result', a - b);
};

Adder.prototype.mul = function(a, b) {
  this.emit('result', a * b);
};

Adder.prototype.div = function(a, b) {
  this.emit('result', a / b);
};