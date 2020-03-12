var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
var url = req.url+"";

if(url.includes('jqu')){
fs.readFile('./jquery.js','utf-8',function(error,content){
res.writeHead(200,{"Content-type":"application/x-javascript"});
res.write(content);
res.end();
});
}

else if(url.includes('soc')){
fs.readFile('./socket.io.js','utf-8',function(error,content){
res.writeHead(200,{"Content-type":"application/x-javascript"});
res.write(content);
res.end();
});
}

else{
fs.readFile('./test.html','utf-8',function(error,content){
res.writeHead(200,{"Content-type":"text/html"});
res.write(content);
res.end();
});

}

});




server.listen(8089,"192.168.43.206");


var io=require('socket.io').listen(server);
io.sockets.on('connection',function(socket){

socket.on('message',function(message){

socket.broadcast.emit('message',message);

});
console.log("connection success");

});
