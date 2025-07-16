"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let userCount = 0;
let allSocket = [];
wss.on('connection', function ws(socket) {
    socket.on('error', console.error);
    allSocket.push(socket);
    userCount = userCount + 1;
    console.log(userCount);
    socket.send("Server has been started");
    socket.on('message', function message(data) {
        console.log("message recieved" + data.toString());
        for (let i = 0; i < allSocket.length; i++) {
            allSocket[i].send(data.toString() + "sent from server to all clients");
        }
    });
});
