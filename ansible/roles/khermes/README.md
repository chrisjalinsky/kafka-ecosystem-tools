kafka {
  bootstrap.servers="data1.lan:9092"
  key.serializer = "io.confluent.kafka.serializers.KafkaAvroSerializer"
  value.serializer = "io.confluent.kafka.serializers.KafkaAvroSerializer"
  schema.registry.url = "http://data1.lan:8081"
}
