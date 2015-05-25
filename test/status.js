/**
 * Simple test to make sure the server is up and running
 */
var should = require('should'),
    request = require('supertest');

before(function(done) {
    require('./bootstrap.js');
    done();
});

describe('Blink Server Status', function() {
    it('Should get server message', function(done) {
        request('localhost:3000')
            .get('/')
            .expect(200)
            .end(function(err, res) {
                if (err) {
                    return done(err)
                }
                res.text.should.be.exactly('Blink server is running');
                done();
            })
    });
});
