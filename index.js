var http=require('http');
http.createServer(function(req,res){
res.end("gerenciador financeiro");
}).listen(8080);