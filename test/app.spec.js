'use strict';

var Bot = require('../lib/bot.js');
var assert = require('assert');

suite('AwesomenessTest', function() {
  test('#init()', function(done) {
    assert.equal(Bot.sayHi(), 'hi');
    done();
  });
});
