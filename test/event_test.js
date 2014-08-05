var proc = require('child_process'),
    sinon = require('sinon'),
    chai = require('chai'),
    expect = chai.expect,
    Event = require('../lib/eventFile'),
    myEvent, exec;

var execStub = function() {
    var _self = sinon.stub(proc, 'exec', function(cmd, callback) {
        _self.cmd = cmd;
        console.log('cmd=='+cmd);
        console.log('callback=='+callback);
        process.nextTick(callback);
    });
    return _self;
};

describe('Event', function() {
    beforeEach(function(){
        console.log('In beforeEach')
        exec = execStub();
    });

    afterEach(function(){
        console.log('In afterEach')
        exec.restore();
    });

    it('Event should be fired', function(done) {
        console.log('Inside it (Test)');
        myEvent = new Event();
        console.log('myEvent==='+myEvent);
        myEvent.on('test', function() {
            console.log('Inside On Event');
            expect(exec.cmd).to.equal('ls -l');
            done();
        });
    });
});