var sinon = require('sinon'),
    expect = require('chai').expect,
    assert = require('chai').assert,
    should = require('chai').should(),
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
        db.init('username','pass123','https://google.com');

        //Using Chai - Expect Assertion
        expect(callback.calledOnce).to.be.ok;

        //Using Chai - Should Assertion
        callback.calledOnce.should.be.ok;

        //Using Chai - Assert Assertion
        assert.isTrue(callback.calledOnce, 'The callback function is called sucessfully');

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
        db.init('username','pass123','https://google.com');
        expect(callback.calledOnce).to.be.ok;
        expect(callback.getCall(0).args[0]).to.equal('Connection Success from a Stub');
    });
    it('Unsucessfull Connection', function() {
        var stub = sinon.stub(db, 'init', function(username, password, url){
            db.emit('onFailure', 'Connection Failed from a Stub');
        });
        db.on('onFailure', callback);
        db.init('','','https://google.com');
        expect(callback.calledOnce).to.be.ok;
        expect(callback.getCall(0).args[0]).to.equal('Connection Failed from a Stub');
    });
});

describe('Database Test Set Username', function() {
    var db;
    var callback;
    beforeEach(function(){
        db = new Database();
        callback = sinon.spy(db, 'onSetUsername');
    });
    it('setUsername', function() {
        db.setUsername('diraj');
        expect(callback.calledOnce).to.be.ok;
    });
});

describe('Database On Test', function() {
    var db;
    var callback;
    beforeEach(function(){
        db = new Database();
        callback = sinon.spy(db, 'onSetUsername');
    });
    it('setUsername', function() {
        db.setUsername('diraj');
        var onCount = db.emit('displayUsername');
        expect(callback.calledOnce).to.be.ok;
    });
});

