// Create web server
// Create a web server that listens to incoming HTTP requests on port 3000. When a request is received, the server should return the following JSON object:
// {
//   "postId": 1,
//   "comments": [
//     {
//       "id": 1,
//       "body": "Some comment"
//     },
//     {
//       "id": 2,
//       "body": "Another comment"
//     }
//   ]
// }
// The server should return the JSON object when it receives a GET request to the path '/posts/1/comments'.
// The server should listen to port 3000.
// The server should return the JSON object as a response to the GET request.
// The JSON object should be created in a separate JavaScript file, comments.js, which should be imported into the main server file.
// The JSON object should be created using the JSON.stringify() method.

const http = require('http');
const comments = require('./comments');

const server = http.createServer((req, res) => {
  if (req.url === '/posts/1/comments' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(comments));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});