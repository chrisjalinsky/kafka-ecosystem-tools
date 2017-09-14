Confluent Platform

```
start zookeeper
start kafka
start schema-registry
```
Recompiling Connect HDFS for MapR:

NOTE: I duplicated the HourlyPartitioner.java into CustomPartitioner.java, and changed the partitioner to use the following format (for alternate partition naming conventions). Changing the path.format option in the properties files didn't work for me. So I created a new class.
```
'hour'=YYYYMMdd_HH00/
```

Recompile and replace the lib in the distribution. TODO: use git build to create entire package
```

mvn clean package -Dmaven.test.skip=true
```
Move old connector
```
mv /opt/confluent-3.2.1/share/java/kafka-connect-hdfs /tmp/
```

Replace new connector
```
cd /opt/confluent-3.2.1/share/java
mv /opt/src/connect-hdfs-v3.2.1/target/kafka-connect-hdfs-3.2.0-package/share/java/kafka-connect-hdfs .
```

The properties files have been templated, so fire up the connector
```
start connect-hdfs
```


Now start a Kafka producer with one schema:
```
./bin/kafka-avro-console-producer --broker-list localhost:9092 --topic timeavro \
--property value.schema='{"type":"record","name":"myrecord","fields":[{"name":"f1","type":"string"}]}'
```
Write records with current schema:
```
{"f1": "value1"}
```

Notice the Hive table has a hour field for partition and a single f1 field.
```
hive> describe timeavro;
```

Now restart the producer with another field in the avro schema (f2):
```
./bin/kafka-avro-console-producer --broker-list localhost:9092 --topic timeavro --property value.schema='{"type":"record","name":"myrecord","fields":[{"name":"f1","type":"string","default":"defaultf1"},{"name":"f2","type":"string","default":"defaultf2"}]}'
```
Write records with new schema:
```
{"f1": "value3", "f2": "value4"}
```
Notice the Hive table has been altered to fit the new schema.
```
hive> describe timeavro;
```
