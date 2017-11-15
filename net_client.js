var net = require('net');

var HOST = '192.168.100.80';
var PORT = 9094;
// var PORT = 8552;

var client = new net.Socket();
client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    client.write('%01#RDD0012000123**\r');
     // %01#RDD0012000123**

});

client.on('data', function(data) {
    console.log('DATA: ' + data);
    client.destroy();

});

client.on('close', function() {
    console.log('Connection closed');
});
