const http = require('http');
const fs = require('fs');
const server = http.createServer(function (request, response){ // This creates the web server.
    console.log('client request URL: ', request.url);
    
    // this is how we do routing: a response pattern created into the server.
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response adding the correct response code.
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");

