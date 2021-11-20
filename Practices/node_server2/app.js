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

    // The pattern for the dojo.html file.
    else if (request.url === "/dojo.html") {
        
        fs.readFile('dojo.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
            
        });
    }

    else if (request.url === "/stylesheets/style.css") {
        fs.readFile('style.css', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents); 
            response.end();
        });
    }

    else if (request.url === "/images/profile.jpeg") {
        fs.readFile('profile.jpeg', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents); 
            response.end();
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
console.log("Running in localhost at port 6789"); // Will display only on the terminal, not on the browser.

