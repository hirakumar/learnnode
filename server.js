var http = require('http');
http.createServer(function(req,res){
    console.log(req.url);
    var path = req.url;
    res.writeHead(200,{'Content-Type':'plain/text'});

    switch(path){
        case '/':
            res.end('Home Page');
        break;
        case '/about':
            res.end('About Us');
        
    }
    
}).listen(3000);
console.log("Server is started at the port of 3000.")