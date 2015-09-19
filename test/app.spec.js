'use strict';

var Bot = require('../lib/bot.js');
var assert = require('assert');

suite('Bot', function() {
  test('processTweet should return the number of characters', function(done) {
    var tweet = { text: "hello" };
    assert.equal(Bot._processTweet(tweet), 5);
    done();
  });
});
