var Adder = exports.Adder = function() {};

Adder.prototype.add = function(a, b, callback) {
  setTimeout(function() {
    callback(a + b);
  }, 1000);
};

Adder.prototype.sub = function(a, b, callback) {
  setTimeout(function() {
    callback(a - b);
  }, 1000);
};