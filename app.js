var Config = require('./lib/config')();
var Bot = require('./lib/bot')(Config);

function init() {
  Bot.printFeeling();
}

setInterval(init, Config.INTERVAL);
