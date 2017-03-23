const io = require('socket.io')()

io.sockets.on('connection', function(socket) {
  socket.on('init', function (data) {
    console.log("GROVER")
  })
// io.on('connection', function (socket) {
  // socket.emit('server event', { foo: 'bar' });
  // socket.on('client event', function (data) {
  //   console.log(data);
  // });
});

module.exports = io
