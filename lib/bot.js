'use strict';

var _ = require('underscore');
var Config = require('./config').Config;
var Twit = require('twit');
var T = new Twit(Config);

// var clc = require('cli-color');
// var fs = require('fs');
// var http = require('http');
// var https = require('https');
// var request = require('request');

var Bot = function() {
  var module = {};

  module._processTweet = function(tweet) {
    var feeling = this._extractFeeling(tweet);

    if (feeling) {
      console.log(feeling);
    }
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

module.exports = new Bot();
