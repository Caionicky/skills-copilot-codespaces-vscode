// Create web server
// Create a web server that listens on port 3000 and returns the comments array as JSON data when a GET request is made to the /comments path.
// For all other paths, the server should return a 404 error.
// Your server should return the following JSON data when a GET request is made to the /comments path:
// [
//     {username: "Todd", comment: "lol that is so funny"},
//     {username: "Skyler", comment: "I like to go birdwatching with my dog"},
//     {username: "Sk8erBoi", comment: "Plz delete your account, Todd"},
//     {username: "onlysayswoof", comment: "woof woof woof"},
//     {username: "hexagonsarecool", comment: "this is a test"}
// ]

const http = require('http');
const url = require('url');

const comments = [
    {username: "Todd", comment: "lol that is so funny"},
    {username: "Skyler", comment: "I like to go birdwatching with my dog"},
    {username: "Sk8erBoi", comment: "Plz delete your account, Todd"},
    {username: "onlysayswoof", comment: "woof woof woof"},
    {username: "hexagonsarecool", comment: "this is a test"}
];

const server = http.createServer((req, res) => {
    const path = url.parse(req.url).pathname;
    if (req.method === 'GET' && path === '/comments') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(comments));
        res.end();
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found\n');
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
