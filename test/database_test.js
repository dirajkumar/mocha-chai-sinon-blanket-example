var sinon = require('sinon'),
    expect = require('chai').expect,
    Database = require('../lib/database');

describe('Database Connection Tests using Spies', function() {
    var db;
    var callback;
    beforeEach(function(){
        db = new Database();
        callback = sinon.spy();
    });
    it('Sucessfull Connection', function() {
        db.on('onSuccess', callback);
        db.init('diraj','pass','google.com');
        expect(callback.calledOnce).to.be.ok;
        expect(callback.getCall(0).args[0]).to.equal('Connection Success');
    });
    it('Unsucessfull Connection', function() {
        db.on('onFailure', callback);
        db.init('','','');
        expect(callback.calledOnce).to.be.ok;
        expect(callback.getCall(0).args[0]).to.equal('Connection Failed');
    });
});

describe('Database Connection Tests using Stubs', function() {
    var db;
    var callback;
    beforeEach(function(){
        db = new Database();
        callback = sinon.spy();
    });
    it('Sucessfull Connection', function() {
        var stub = sinon.stub(db, 'init', function(username, password, url){
            db.emit('onSuccess', 'Connection Success from a Stub');
        });
        db.on('onSuccess', callback);
        db.init('diraj','pass','google.com');
        expect(callback.calledOnce).to.be.ok;
        expect(callback.getCall(0).args[0]).to.equal('Connection Success from a Stub');
    });
    it('Unsucessfull Connection', function() {
        var stub = sinon.stub(db, 'init', function(username, password, url){
            db.emit('onFailure', 'Connection Failed from a Stub');
        });
        db.on('onFailure', callback);
        db.init('','','google.com');
        expect(callback.calledOnce).to.be.ok;
        expect(callback.getCall(0).args[0]).to.equal('Connection Failed from a Stub');
    });
});

