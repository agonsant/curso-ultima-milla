import express from 'express';
import http from 'http';
import path from 'path';
import { Server } from 'socket.io';
var app = express();
var server = http.createServer(app);
var io = new Server(server);
app.get('/', function (_req, res) {
    res.sendFile(path.resolve('./index.html'));
});
io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
        io.emit('change_color', '#F433E2');
        io.emit('obj_demo', { hello: 'world' });
    });
});
server.listen(3000, function () {
    console.log('listening on *:3000');
});
