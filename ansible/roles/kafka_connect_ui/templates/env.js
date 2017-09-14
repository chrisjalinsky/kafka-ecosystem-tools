//Change the URLs of the endpoints here
var clusters = [
   {
     NAME:"prod",
     KAFKA_CONNECT: "{{ kafka_connect_ui_connect_url }}",
     KAFKA_TOPICS_UI: "{{ kafka_connect_ui_kafka_topics_ui_url }}",
     KAFKA_TOPICS_UI_ENABLED: true,
     COLOR: "#141414"
   }
]
