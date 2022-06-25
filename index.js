const http = require('http')
const express = require('express')
const { Server } = require('socket.io');  

const app = express();
const server = http.createServer(app)
const io = Server(server);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


server.listen(8000, () => {
  console.log('Server is running')
})

