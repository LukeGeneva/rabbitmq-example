const amqp = require('amqplib/callback_api');
const readline = require('readline');

const config = require('./config');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, ch) {
    const ex = 'test';

    ch.assertExchange(ex, 'fanout', { durable: false });

    rl.on('line', (input) => {
      ch.publish(ex, '', new Buffer(input));
    });
  });
});
