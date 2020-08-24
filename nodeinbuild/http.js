var http = require('http');

var server = http.createServer(function(req,res){
    res.write('<h1>App with NodeJS');
    res.end();
});

server.listen(8900);