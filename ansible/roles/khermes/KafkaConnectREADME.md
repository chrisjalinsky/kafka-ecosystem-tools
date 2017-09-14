curl -XPUT 'box1.lan:9200/khermes?pretty' -H 'Content-Type: application/json' -d'
{
    "settings" : {
        "index" : {
            "number_of_shards" : 1,
            "number_of_replicas" : 1
        }
    }
}'

curl -X POST "http://box1.lan:9200/khermes/khermes/_mapping" -d '{
   "khermes" : {
   "properties" : {
       "song" : { "type" : "string"},
       "artist" : { "type" : "string"},
       "album" : { "type" : "string"},
       "genre" : { "type" : "string"},
       "playduration" : { "type" : "integer"},
       "rating" : { "type" : "integer"},
       "user" : { "type" : "string"},
       "usertype" : { "type" : "string"},
       "city" : { "type" : "string"},
       "location" : { "type" : "geo_point"},
       "starttime" : { "type" : "string"}
   }}
}'



connector.class=com.datamountaineer.streamreactor.connect.elastic.ElasticSinkConnector
type.name=khermes
topics=khermes
tasks.max=1
name=elastic-khermes
connection.url=http://box1.lan:9200
connect.elastic.sink.kcql=INSERT INTO khermes SELECT song, artist, album, genre, playduration, rating, user, usertype, city, location, starttime FROM khermes
