import express from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const staticHtml = path.resolve("./src/index.html");

app.get("/", (req: express.Request, res: express.Response) => {
    res.sendFile(staticHtml);
});

io.on('connection', (socket) => {
    console.log('socket connection:', socket.connected);
    socket.on('chat message', (message) => {
      io.emit('chat message', message);
    });
});

server.listen(3200, () => {
    console.log("listening on server *:3200");
});

export {};
