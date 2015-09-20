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
  },
  test: {
    INTERVAL: 1000,
    queueName: 'feelings_test',
    consumer_key: '12345',
    consumer_secret: '12345',
    access_token: '12345',
    access_token_secret: '12345'
  }
};

var Config = configuration[env];

module.exports.Config = Config;
