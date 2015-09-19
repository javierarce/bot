var Config = require('./lib/config').Config;
var _ = require('underscore');
var Twit = require('twit');
var T = new Twit(require('./lib/config.js'));
var clc = require('cli-color');
var fs = require('fs');
var http = require('http');
var https = require('https');
var request = require('request');

function init() {
}

init();
