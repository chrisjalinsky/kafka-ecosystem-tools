Schema Registry UI
-----

Using the combined Avro schema for Beacon Events, Rtb Events, etc, as a union. You can properly nest records.

Pasting the schema into the "new" window and trying to validate will currently throw a front end validation error.

If you switch to a "curl" command, this will succeed. And furthermore, will show up in the UI parsed correctly.