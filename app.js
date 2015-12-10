var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('htdocs'));

io.on('connection', function(socket){
	socket.on("sendOffer",function(sdf){
		console.log("offer");
		socket.broadcast.emit('reciveOffer', sdf);
	});

	socket.on("sendAnswer",function(sdf){
		console.log("answer");
		socket.broadcast.emit('reciveAnswer', sdf);
	});

	socket.on("sendCdi",function(cdi){
		console.log("cdi");
		socket.broadcast.emit('reciveCdi', cdi);
	});
});

var port = 3000;
http.listen(port,function(){
	console.log("Expressサーバーがポート%dで起動しました。モード:%s",port,app.settings.env)
});
