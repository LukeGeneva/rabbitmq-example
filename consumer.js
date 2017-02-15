const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, ch) {
    const ex = 'test';

    ch.assertExchange(ex, 'fanout', { durable: false });

    ch.assertQueue('', { exclusive: true }, function(err, q) {
      console.log('Waiting for messages in %s.', q.queue);
      ch.bindQueue(q.queue, ex, '');

      ch.consume(q.queue, function(msg) {
        console.log(msg.content.toString());
      }, { noAck: true });
    });
  });
});
