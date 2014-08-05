var util = require('util'),
    proc = require('child_process'),
    EventEmitter = require('events').EventEmitter;

var Event = function() {
    var _self = this;
    proc.exec('ls -l', function(error, stdout, stderr) {
        _self.emit('test');
        console.log('emitted');
    });
};
util.inherits(Event, EventEmitter);

module.exports = Event;