import express from 'express';
import http from 'http';
import path from 'path';
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./src/index.html'));
});

// io.on('connection', (socket) => {
//     console.log('a user connected');
//     socket.on('disconnect', () => {
//       console.log('user disconnected');
//     });
// });

// io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
    //   io.emit('chat message', msg);
      io.emit('chat message', msg ); // This will emit the event to all connected sockets
    });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});