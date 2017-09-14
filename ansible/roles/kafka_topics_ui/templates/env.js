var clusters = [
    {
      NAME: "prod",
      KAFKA_REST: "{{ kafka_topics_ui_kafka_rest_url }}",
      MAX_BYTES: "50000",
      RECORD_POLL_TIMEOUT: "5000",
      COLOR: "#141414", // Optional
      DEBUG_LOGS_ENABLED: true
    }
  ];
