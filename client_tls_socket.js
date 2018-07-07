var mqtt = require('mqtt')

var clientId = 'web_' + Math.random().toString(16).substr(2, 8)

var host = 'wss:m13.cloudmqtt.com/mqtt'
var port = 34081

var options = {
  keepalive: 10,
  clientId: clientId,
  protocolId: 'MQTT',
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  will: {
    topic: 'testtopic',
    payload: 'Connection Closed abnormally..!',
    qos: 0,
    retain: false
  },
  username: 'testuser',
  password: 'testuser',
  host:host,
  port:port,
  rejectUnauthorized: false
}

var client = mqtt.connect(host,options)

client.on('error', function (err) {
  console.log(err)
  client.end()
})

client.on('connect', function () {
  console.log('client connected:' + clientId)
})

client.subscribe('testtopic', { qos: 0 })

client.publish('testtopic', 'wss secure connection demo...!', { qos: 0, retain: false })

client.on('message', function (topic, message, packet) {
  console.log('Received Message:= ' + message.toString() + '\nOn topic:= ' + topic)
})

client.on('close', function () {
  console.log(clientId + ' disconnected')
})