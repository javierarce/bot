'use strict';

var _ = require('underscore');
var Twit = require('twit');

var redis = require('redis');
var client = redis.createClient();

// var clc = require('cli-color');
// var fs = require('fs');
// var http = require('http');
// var https = require('https');
// var request = require('request');

module.exports = function(Config) {
  var module = {};
  var queueName = Config.queueName;

  var T = new Twit(Config);

  module._processTweet = function(tweet) {
    var feeling = this._extractFeeling(tweet);

    if (feeling) {
      client.rpush(queueName, feeling);
    }
  };

  module.printFeeling = function() {
    client.lpop(queueName, function(err, feeling) {
      console.log(feeling);
    });
  };

  module._extractFeeling = function(tweet) {
    var text = tweet.text;
    var regexp = new RegExp(/I('m| am) feeling (.*?)(\s+|$)/gi);

    var match = regexp.exec(text);

    return match && match[2];
  };

  module.sayHi = function() {
    return 'hi';
  };

  module.capture = function() {
    _.bindAll(this, '_processTweet');

    var stream = T.stream('statuses/filter', { track: ['I am feeling'] });
    stream.on('tweet', this._processTweet);
  };

  return module;
};
