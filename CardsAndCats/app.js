const fs = require('fs'),
    http = require('http'),
    port = 7077;

const server = http.createServer(function server(request, response){

if(request.url === '/cars') {
    fs.readFile('views/cars.html', 'utf8', function (errors, contents){
        response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response adding the correct response code.
        response.write(contents);  //  send response body
        response.end(); // finished!
    });
}

else if(request.url === '/cats') {
    fs.readFile('views/cats.html', 'utf8', function (errors, contents){
        response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response adding the correct response code.
        response.write(contents);  //  send response body
        response.end(); // finished!
    });
}

else if(request.url === '/cars/new') {
    fs.readFile('views/newcar.html', 'utf8', function (errors, contents){
        response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response adding the correct response code.
        response.write(contents);  //  send response body
        response.end(); // finished!
    });
}

else if(request.url === '/stylesheets/style.css'){
    fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
    response.writeHead(200, {'Content-type': 'text/css'});
    response.write(contents);
    response.end();
    })
}

else if(request.url === '/images/car1.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/car1.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
}

else if(request.url === '/images/car2.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/car2.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
}

else if(request.url === '/images/car3.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/car3.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
}

else if(request.url === '/images/car4.png'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/car4.png', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/png'});
        response.write(contents);
        response.end();
    })
}

else if(request.url === '/images/cat1.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/cat1.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
}

else if(request.url === '/images/cat2.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/cat2.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
}

else if(request.url === '/images/cat3.gif'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/cat3.gif', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/gif'});
        response.write(contents);
        response.end();
    })
}

else if(request.url === '/images/cat4.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/cat4.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
}



else { // If file is null, not found
    response.writeHead(404);
    response.end("File not found!");
}
});

server.listen(port, function(){
console.log("Running on port: ", port);
});