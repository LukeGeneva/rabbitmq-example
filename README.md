# Rabbit MQ Example
Example RabbitMQ producer, exchange, and consumer setup.

## Setup
1. Install [Erlang](http://www.erlang.org/downloads)
2. Install [RabbitMQ](https://www.rabbitmq.com/download.html)
3. Install npm dependencies with `npm install`

## Running
Run the `producer.js` file with Node.
```
node producer.js
```
In a new terminal, you can run the consumer script.
```
node consumer.js
```
The producer script allows you to type messages that get passed through the
RabbitMQ exchange and displayed by the consumer script. To demonstrate a
typical fanout exchange, you can open several terminals and run
`node consumer.js` in each. They will all function the same.
