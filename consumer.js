const kafka = require('kafka-node');

const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const consumer = new kafka.Consumer(
  client,
  [{ topic: 'test', partition: 0 }],
  { autoCommit: true }
);

consumer.on('message', (message) => {
  console.log('Received message:', message);
});

consumer.on('error', (err) => {
  console.error('Consumer error:', err);
});
