const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('自動化部署網頁成功！');
});
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
