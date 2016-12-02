var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/View')); //precisei colocar os arquivos estaticos como um middleware antes do route handler

app.get('/', function(req, res){  //route handler, faz get no html do chat
  res.sendFile(__dirname + '/View/chat_screen.html');
});

io.on('connection', function(socket){

  console.log('a user connected');

  socket.on('disconnect', function(){

    console.log('user disconnected');

  });
});



io.on('connection', function(socket){

  socket.on('chat message', function(msg){

    console.log('message: ' + msg);

    io.emit('chat message', msg);

  });
});



io.on('connection', function(socket){

  socket.on('name', function(msg){

    console.log('name: ' + msg);

    io.emit('name', msg);

  });
});



http.listen(8080, function(){

  console.log('conectando na porta 8080!');

});