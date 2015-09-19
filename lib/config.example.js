var env = process.env.NODE_ENV || 'development';

var configuration = {
  development: {
    consumer_key: '',
    consumer_secret: '',
    access_token: '',
    access_token_secret: ''
  },
  production: {
    consumer_key: '',
    consumer_secret: '',
    access_token: '',
    access_token_secret: ''
  }
};

var Config = configuration[env];

module.exports.Config = Config;
