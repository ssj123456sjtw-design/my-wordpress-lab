const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('阿可你好棒');
});
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
