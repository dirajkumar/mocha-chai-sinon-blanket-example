var util = require('util'),
    EventEmitter = require('events').EventEmitter;

var Database = function () {
    var self = this;

    self.init = function(username, password, url){
    (username && password && url) ?
        self.emit('onSuccess', 'Connection Success') : self.emit('onFailure', 'Connection Failed');
    }

    self.setUsername = function(username){
        self.onSetUsername();
        self.on('displayUsername', function(){
        });
    }

    self.onSetUsername = function () {
        return;
    }

    self.setPassword = function(){
        return;
    }

    self.setUrl = function(){
        return;
    }
}

util.inherits(Database, EventEmitter);

module.exports = Database;