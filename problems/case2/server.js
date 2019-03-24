var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({
    port: 8080
});

wss.on('connection', function connection(ws, req) {
    console.log(req.connection.remoteAddress)
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    ws.send('something');
});