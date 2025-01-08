const kafka = require('kafka-node');

const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const admin = new kafka.Admin(client);

const topics = [
  {
    topic: 'test',
    partitions: 1,
    replicationFactor: 1,
  },
];

admin.createTopics(topics, (err, result) => {
  if (err) {
    console.error('Error creating topic:', err);
  } else {
    console.log('Topic created:', result);
  }
  client.close();
});
