'use strict';

var _ = require('underscore');
var Config = require('./config').Config;
var Twit = require('twit');
var T = new Twit(Config);
var clc = require('cli-color');
var fs = require('fs');
var http = require('http');
var https = require('https');
var request = require('request');

var Bot = function() {
  var module = {};

  module._processTweet = function(tweet) {
    var text = tweet.text;
    return text.length;
  };

  module.sayHi = function() {
    return 'hi';
  };

  module.capture = function() {
    var stream = T.stream('statuses/filter', { track: ['I am'] });
    stream.on('tweet', this._processTweet);
  };

  return module;
};

module.exports = new Bot();
