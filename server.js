

	const http = require('http');

	const server = http.createServer(function(req, res){

    if(req.url === '/hi') {
    	res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Hi guys\n');
    }
     else if(req.url === '/page'){
        res.writeHead(200,{'Content-Type' : 'text/plain'});
		res.end('This is a very nice page\n');
	}
	 else if(req.url === '/search'){
		res.writeHead(200,{'Content-Type' : 'text/plain'});
		res.end('This one is for search\n');
	}
	 else if(req.url === '/info'){
		res.writeHead(200,{'Content-Type' : 'text/plain'});
		res.end('Here you can find interesting information\n');
    }
     else if(req.url === '/date'){
    	res.writeHead(200,{'Content-Type' : 'text/plain'});
		res.end('Here you can watch the date\n');
	}
		else {
			res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end("Wrong");
		}
	})
	server.listen(3001);


	




