import http from 'http';

const server = http.createServer((req,res) => {
    res.writeHead(200, {"Contente-Type": "text/plain"});
    res.end("Node.js+Express+MongoDb");
});

const port = 3000;

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});