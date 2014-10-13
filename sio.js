var socketio = require('socket.io');

function sio(server) {
  var sio = socketio.listen(server);
  sio.sockets.on('connection', function(socket){
    console.log("Socket.IO session connected.");
  });
}

module.exports = sio;
