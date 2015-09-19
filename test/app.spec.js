'use strict';

var Bot = require('../lib/bot.js');
var assert = require('assert');

suite('Bot', function() {
  test('processTweet should return the feeling', function(done) {
    var tweet = { text: 'I am feeling happy' };
    assert.equal(Bot._processTweet(tweet), 'happy');

    tweet = { text: 'I\'m feeling bored' };
    assert.equal(Bot._processTweet(tweet), 'bored');

    tweet = { text: 'I am bored' };
    assert.equal(Bot._processTweet(tweet), null);

    tweet = { text: 'Am I feeling ok?' };
    assert.equal(Bot._processTweet(tweet), null);

    done();
  });
});
