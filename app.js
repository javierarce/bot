var Config = require('./lib/config').Config;
var Bot = require('./lib/bot')(Config);

function init() {
  Bot.capture();
}

init();
