const fs = require('fs'),
    http = require('http'),
    port = 7077;

const server = http.createServer(function server(req, res){

if(request.url === '/cars') {
    fs.readFile('cars.html', 'utf8', function (errors, contents){
        response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response adding the correct response code.
        response.write(contents);  //  send response body
        response.end(); // finished!
    });
}

if(request.url === '/cats') {
    fs.readFile('cats.html', 'utf8', function (errors, contents){
        response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response adding the correct response code.
        response.write(contents);  //  send response body
        response.end(); // finished!
    });
}

if(request.url === '/cars/new') {
    fs.readFile('newcar.html', 'utf8', function (errors, contents){
        response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response adding the correct response code.
        response.write(contents);  //  send response body
        response.end(); // finished!
    });
}

if(request.url === '/stylesheets/style.css'){
    fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
    response.writeHead(200, {'Content-type': 'text/css'});
    response.write(contents);
    response.end();
    })
}

else { // If file is null, not found
    res.writeHead(404);
    res.end("File not found!");
}
});

server.listen(port, function(){
console.log("Running on port: ", port);
});