var util = require('util'),
    EventEmitter = require('events').EventEmitter;

var Database = function () {}

util.inherits(Database, EventEmitter);

Database.prototype.init = function(username, password, url){
    var self = this;
    (username && password && url) ?
        self.emit('onSuccess', 'Connection Success') : self.emit('onFailure', 'Connection Failed');
}

module.exports = Database;