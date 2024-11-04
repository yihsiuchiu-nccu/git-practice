const express = require('express');
const http = require('http');
const { send } = require('process');
const { Server } = require("socket.io");

const app = express();
const port = 3000;
const server = http.createServer(app);
const io = new Server(server);

const clients = new Set();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

io.on('connection', (ws) => {
  console.log("connect:", ws.id);
  clients.add(ws);

  ws.on('disconnect', () => {
    console.log("disconnect:", ws.id);
    clients.delete(ws);
  });
});

setInterval(() => {
  sendMessageToAllClients("Hello from the server");
}, 5000);

function sendMessageToAllClients(message) {
  console.log("send message to client: ", message);
  clients.forEach(client => {
    client.send(message);
  });
}

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})