# Kafka Ecosystem Tools

A Kafka and ecosystem test environment.

**The goal is integrate the following projects:**
  * Confluent Open Source Platform Tools
  * Khermes Distributed data generation via Akka Cluster
  * Kafka Manager
  * Stream Reactor Kafka Connectors
  * Landoop Kafka UIs

**Software used:**
* Vagrant
* Virtualbox
* Ansible
* Mac OSX Sierra
* [Vagrant Hosts Updater](https://github.com/cogitatio/vagrant-hostsupdater) Plugin

**Start VMs**
```
vagrant up
```

**Install playbook**
```
ansible-playbook install.yaml -i inventory.py
```

**Start [Confluent](https://github.com/confluentinc) and [Landoop](https://github.com/Landoop) UIs and Data Mountaineer's [Stream Reactor](https://github.com/datamountaineer/stream-reactor) Plugins and services playbooks**
```
ansible-playbook start-services.yaml -i inventory.py
```

**Start [Khermes](https://github.com/Stratio/khermes/wiki/Getting-started) Akka app playbooks**
```
ansible-playbook start-app.yaml -i inventory.py
```

### Vagrant VMs

By default this will create:

**Kafka Cluster**
3 node Kafka cluster and Zookeeper ensemble

**Hosts:**
- **data1.lan** - Services: Kafka, Zookeeper, Confluent Connect, Rest Proxy, Landoop UIs, Kafka Manager
- **data2.lan** - Services: Kafka, Zookeeper, Confluent Connect, Rest Proxy, Landoop UIs, Kafka Manager
- **data3.lan** - Services: Kafka, Zookeeper, Confluent Connect, Rest Proxy, Landoop UIs, Kafka Manager

**Akka Cluster (Khermes)**
3 node Akka Cluster to generate Avro Data in Kafka

**Hosts:**
- **akka1.lan** - Services: Khermes Akka Seed, Khermes Akka Node
- **akka2.lan** - Services: Khermes Akka Seed, Khermes Akka Node
- **akka3.lan** - Services: Khermes Akka Seed, Khermes Akka Node

### Notable UIs:
UIs are using Apache Web Server Virtualhosts
* [Confluent Schema Registry](http://data1.lan)
* [Kafka Topic UI](http://data1.lan:8090/#/)
* [Confluent Connect UI](http://data1.lan:8084/)
* [Confluent Connect Rest](http://data1.lan:8083/)
* [Kafka Rest Proxy](http://data1.lan:8082/)
* [Kafka Manager](http://data1.lan:9000/)
* [Khermes Console](http://akka1.lan:9080/console)

### Khermes Akka Distributed Data generator for Kafka
[STRATIO BIG DATA](http://www.stratio.com/) has created a cool project.
It will serve as a study in Akka Actors, web sockets and fake data generation.

Follow the example directions to start pushing data to Kafka:
[Set up Khermes](https://github.com/Stratio/khermes/wiki/Set-up-Khermes)

### Apache Zookeeper and Kafka
* [Zookeeper Homepage](https://zookeeper.apache.org/)
* [Kafka Homepage](https://kafka.apache.org/)
Using the standard Apache release instead of the versions in the Confluent Package

### Confluent Open Source Platform
[Confluent Open Source](https://www.confluent.io/product/confluent-open-source/)
**Use the following Confluent OSS services:**
* [Kafka Rest Proxy](https://docs.confluent.io/current/kafka-rest/docs/index.html)
* [Kafka Connect](https://docs.confluent.io/current/connect/index.html)
* [Schema Registry](https://docs.confluent.io/current/schema-registry/docs/index.html)

### Vagrant and Virtualbox provisioned by Ansible
**Tune memory, CPU, network, disk settings**
Look at the ```./ansible/hosts.yaml``` file for current Virtualbox usage. This is currently set very low.

**Defaults:**
* Vagrant box Ubuntu/Xenial - ```bento/ubuntu-16.04```
* 2 GB RAM
* 1 CPU
* Private Virtualbox Host Network ip in the subnet ```10.10.10.0/24``` range starting at ```10.10.10.0```

**Options**
mix and match storage and network settings in the ./ansible/hosts.yaml's ```_meta.hostvars``` section
* static network interfaces
* network bridge interfaces
* extra storage devices
* memory
* cpu

Improvements and suggestions welcome.
Shout out to the hard working developers creating this great software
