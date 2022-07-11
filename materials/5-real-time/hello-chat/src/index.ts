import express from 'express';
import http from 'http';
import path from 'path';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (_req, res) => {
    res.sendFile(path.resolve('./index.html'));
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
      io.emit('change_color', '#F433E2');
      io.emit('obj_demo', { hello: 'world'});
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
