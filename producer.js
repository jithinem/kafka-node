const kafka = require('kafka-node');

const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const producer = new kafka.Producer(client);

const payloads = [
  { topic: 'test', messages: 'Hello, Kafka!', partition: 0 }
];

producer.on('ready', () => {
  console.log('Producer is ready');
  producer.send(payloads, (err, data) => {
    if (err) console.error(err);
    else console.log('Message sent:', data);
  });
});

producer.on('error', (err) => {
  console.error('Producer error:', err);
});
