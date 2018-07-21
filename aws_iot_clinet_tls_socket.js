var awsIot = require('aws-iot-device-sdk');

//
// Replace the values of '<YourUniqueClientIdentifier>' and '<YourCustomEndpoint>'
// with a unique client identifier and custom host endpoint provided in AWS IoT.
// NOTE: client identifiers must be unique within your AWS account; if a client attempts 
// to connect with a client identifier which is already in use, the existing 
// connection will be terminated.
//
var device = awsIot.device({
   keyPath: './certificate/278cb82626-private.pem.key',
  certPath: './certificate/278cb82626-certificate.pem.crt',
    caPath: './certificate/aws-iot-rootCA.crt',
  clientId: 'nodejstesting_client01',
      host: 'a1zetnmz2w4vck.iot.us-east-2.amazonaws.com'
});

//
// Device is an instance returned by mqtt.Client(), see mqtt.js for full
// documentation.
//
device
  .on('connect', function() {
    console.log('connect');
    //device.subscribe('topic_2');
    device.publish('topic_2', JSON.stringify({ test_data: 'hello 2'}));
  });
