const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const { instrument } = require("@socket.io/admin-ui");

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["https://admin.socket.io"],
    credentials: true
  }
});

instrument(io, {
  auth: false
});

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
  console.log(`Socket id: ${socket.id}`);

  socket.broadcast.emit('chat message');

  socket.on('chat message', (msg, msg2) => {
    console.log('msg =>>', msg);
    console.log('msg2 =>>', msg2);
    io.emit('chat message', msg);
  });
  // socket.on('chat message', (arg, callback) => {
  //   console.log('arg =>>', arg);
  //   io.emit('chat message', arg);
  //   callback('terkirim')
  // });

  // socket.on('show alert', (msg) => {
  //   io.emit('client show alert', msg);
  // })
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});