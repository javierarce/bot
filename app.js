var _ = require('underscore');
var Bot = require('./lib/bot');
var Config = require('./lib/config').Config;
var Twit = require('twit');
var T = new Twit(Config);
var clc = require('cli-color');
var fs = require('fs');
var http = require('http');
var https = require('https');
var request = require('request');

function init() {
  Bot.sayHi();
}

init();
