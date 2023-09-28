const io = require('socket.io')(3000);

io.on('connection', socket => {
  console.log('test');
  console.log(socket.id);
});