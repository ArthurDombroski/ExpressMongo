import http from 'http';

const port = 3000;

const rotas = {
    "/": "Node.js+Express+Mongodb"
};

const server = http.createServer((req,res) => {
    res.writeHead(200, {"Contente-Type": "text/plain"});
    res.end(rotas[req.url]);
});

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});