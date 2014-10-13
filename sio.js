var socketio = require('socket.io');
var model = require("./model");

function sio(server) {
  var sio = socketio.listen(server);
  sio.sockets.on('connection', function(socket){
    console.log("Socket.IO session connected.");
    socket.on("save", function(msg){
      model.User.update(
        {userId: msg.userId}, msg, {upsert: true},
        function(err){ if(err) console.log(err); }
      );
    });
  });
}

module.exports = sio;
