var clusters = [
   {
       NAME:"prod",
       // Schema Registry service URL (i.e. http://localhost:8081)
       SCHEMA_REGISTRY: "http://{{ schema_registry_ui_registry_host }}:8081",
       COLOR: "#141414" // optional
     },
     {
       NAME:"dev",
       SCHEMA_REGISTRY: "http://{{ schema_registry_ui_registry_host }}:8383",
       COLOR: "red", // optional
       allowGlobalConfigChanges: true, // optional
       allowTransitiveCompatibilities: true        // if using a Confluent Platform release >= 3.1.1 uncomment this line
     }
  ];