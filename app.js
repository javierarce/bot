var _ = require('underscore');
var Config = require('./lib/config').Config;
var Twit = require('twit');
var T = new Twit(Config);
var clc = require('cli-color');
var fs = require('fs');
var http = require('http');
var https = require('https');
var request = require('request');

function init() {
  console.log('Hi!')
}

init();
