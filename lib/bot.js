'use strict';

var Config = require('./config').Config;
var Twit = require('twit');
var T = new Twit(Config);

// var clc = require('cli-color');
// var _ = require('underscore');
// var fs = require('fs');
// var http = require('http');
// var https = require('https');
// var request = require('request');

var Bot = function() {
  var module = {};

  module._processTweet = function(tweet) {
    var text = tweet.text;
    var regexp = new RegExp(/I('m| am) feeling (.*?)(\s+|$)/gi);

    var match = regexp.exec(text);

    if (match) {
      return match[2];
    } else {
      return null;
    }
  };

  module.sayHi = function() {
    return 'hi';
  };

  module.capture = function() {
    var stream = T.stream('statuses/filter', { track: ['I am feeling'] });
    stream.on('tweet', this._processTweet);
  };

  return module;
};

module.exports = new Bot();
