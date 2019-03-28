const http = require('http'); // importing Node's built-in module for working with HTTP


const hostname = '127.0.0.1'; // IP address of the computer
// This address is how a computer says "me"


const port = 3000; // This is the port number we'll listen on
// We're writing a server program, which runs in the background
// and listen on a port

// http.createServer will return something that listens 
// on a port for http requests and can send back a Response.
// You configure it by giving it a function that will do
// something custom with the Request and the Response. 
// The Request is what came from the browser.
// The Response is "half-baked" and ready for you to send it back.
const server = http.createServer((req, res) => {
    
});